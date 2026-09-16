import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const expectedOrder = [
  'Daniel Clifford',
  'Jonathan Walters',
  'Jeanette Harmon',
  'Patrick Abrams',
  'Kira Whittle',
];

const referenceViewports = [
  { width: 1440, height: 1029, label: 'desktop' },
  { width: 768, height: 1353, label: 'tablet' },
  { width: 375, height: 2113, label: 'mobile' },
];

function repositoryRuntimeFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(root)) {
    const path = join(root, entry);
    if (statSync(path).isDirectory()) files.push(...repositoryRuntimeFiles(path));
    else files.push(path);
  }
  return files;
}

async function cardBoxes(page: import('@playwright/test').Page) {
  return page.locator('[data-testid="testimonial-card"]').evaluateAll((cards) =>
    cards.map((card) => {
      const box = card.getBoundingClientRect();
      return {
        person: card.getAttribute('data-person'),
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height,
      };
    }),
  );
}

test('renders the five source testimonials in canonical document order and exact source copy', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('[data-testid="testimonial-card"]');
  await expect(cards).toHaveCount(5);
  await expect(cards.locator('.testimonial-card__name')).toHaveText(expectedOrder);
  await expect(cards.nth(0).locator('.testimonial-card__lead')).toHaveText(
    'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
  );
  await expect(cards.nth(1).locator('.testimonial-card__quote')).toHaveText(
    '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “',
  );
  await expect(cards.nth(4).locator('.testimonial-card__quote')).toContainText('developent experience');
});

test('uses local durable imagery and self-hosted Barlow Semi Condensed 500/600', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  const assetState = await page.evaluate(() => ({
    images: [...document.images].map((image) => ({
      src: image.src,
      loaded: image.complete && image.naturalWidth > 0,
      local: new URL(image.src).origin === location.origin,
      alt: image.alt,
    })),
    mediumLoaded: document.fonts.check('500 13px "Barlow Semi Condensed"'),
    semiboldLoaded: document.fonts.check('600 20px "Barlow Semi Condensed"'),
    fontResources: performance
      .getEntriesByType('resource')
      .map((entry) => entry.name)
      .filter((name) => /BarlowSemiCondensed|assets\/fonts/.test(name)),
  }));

  expect(assetState.images).toHaveLength(6);
  expect(assetState.images.every((image) => image.loaded && image.local)).toBe(true);
  expect(assetState.images.every((image) => image.alt === '')).toBe(true);
  expect(assetState.mediumLoaded).toBe(true);
  expect(assetState.semiboldLoaded).toBe(true);
  expect(assetState.fontResources.length).toBeGreaterThanOrEqual(2);
  expect(assetState.fontResources.every((url) => new URL(url).origin === 'http://127.0.0.1:4321')).toBe(true);

  for (const root of ['src', 'public', 'dist']) {
    for (const path of repositoryRuntimeFiles(root)) {
      if (/\.(png|jpg|jpeg|gif|woff2?|ttf)$/i.test(path)) continue;
      const source = readFileSync(path, 'utf8');
      expect(source).not.toContain('figma.com/api/mcp/asset');
    }
  }
});

test('keeps decorative media silent, exposes no invented controls, and passes axe', async ({ page }) => {
  await page.goto('/');
  const quoteMark = page.locator('.testimonial-card__quotation-mark');
  await expect(quoteMark).toHaveAttribute('alt', '');
  await expect(quoteMark).toHaveAttribute('aria-hidden', 'true');

  const interactiveCount = await page.locator(
    '[data-testid="testimonial-card"] a, [data-testid="testimonial-card"] button, [data-testid="testimonial-card"] input, [data-testid="testimonial-card"] select, [data-testid="testimonial-card"] textarea, [data-testid="testimonial-card"] [tabindex]:not([tabindex="-1"])',
  ).count();
  expect(interactiveCount).toBe(0);

  const motion = await page.locator('[data-testid="testimonial-card"]').first().evaluate((card) => {
    const styles = getComputedStyle(card);
    return { animation: styles.animationName, transition: styles.transitionDuration };
  });
  expect(motion.animation).toBe('none');
  expect(motion.transition).toBe('0s');

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
});

test('matches the supplied desktop, tablet, and mobile compositions', async ({ page }, testInfo) => {
  for (const viewport of referenceViewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);

    const grid = await page.locator('.testimonials-grid').boundingBox();
    const boxes = await cardBoxes(page);
    expect(grid).not.toBeNull();
    expect(boxes.map((box) => box.person)).toEqual(expectedOrder);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);

    if (viewport.width === 1440) {
      expect(grid!.width).toBeCloseTo(1114, 0);
      expect(boxes[0].width).toBeCloseTo(540, 0);
      expect(boxes[1].width).toBeCloseTo(255, 0);
      expect(Math.abs(boxes[0].y - boxes[1].y)).toBeLessThan(2);
      expect(Math.abs(boxes[0].y - boxes[4].y)).toBeLessThan(2);
      expect(Math.abs(boxes[2].y - boxes[3].y)).toBeLessThan(2);
      expect(boxes[4].height).toBeGreaterThan(540);
    } else if (viewport.width === 768) {
      expect(grid!.width).toBeCloseTo(648, 0);
      expect(boxes[0].width).toBeCloseTo(648, 0);
      expect(boxes[1].width).toBeCloseTo(308, 0);
      expect(Math.abs(boxes[1].y - boxes[2].y)).toBeLessThan(2);
      expect(boxes[3].width).toBeCloseTo(648, 0);
      expect(boxes[4].width).toBeCloseTo(648, 0);
    } else {
      expect(grid!.width).toBeCloseTo(305, 0);
      expect(boxes.every((box) => Math.abs(box.width - 305) < 1)).toBe(true);
      expect(boxes.every((box, index) => index === 0 || box.y > boxes[index - 1].y)).toBe(true);
    }

    await testInfo.attach(`reference-${viewport.label}`, {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
  }
});

test('reflows safely around implementation-selected transitions and outside reference widths', async ({ page }, testInfo) => {
  const widths = [320, 659, 660, 1233, 1234, 1600];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);

    const state = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(state.content).toBeLessThanOrEqual(state.viewport);

    const boxes = await cardBoxes(page);
    expect(boxes.map((box) => box.person)).toEqual(expectedOrder);
    expect(boxes.every((box) => box.width > 0 && box.height > 0)).toBe(true);

    if (width === 659) {
      expect(new Set(boxes.map((box) => Math.round(box.y))).size).toBe(5);
    }
    if (width === 660 || width === 1233) {
      expect(Math.abs(boxes[1].y - boxes[2].y)).toBeLessThan(2);
    }
    if (width === 1234 || width === 1600) {
      expect(Math.abs(boxes[0].y - boxes[1].y)).toBeLessThan(2);
      expect(Math.abs(boxes[0].y - boxes[4].y)).toBeLessThan(2);
    }

    await testInfo.attach(`responsive-${width}`, {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
  }
});

test('preserves evidenced visual tokens at the desktop reference width', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1029 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  const tokens = await page.locator('[data-person="Daniel Clifford"]').evaluate((card) => {
    const cardStyle = getComputedStyle(card);
    const leadStyle = getComputedStyle(card.querySelector('.testimonial-card__lead')!);
    const quoteStyle = getComputedStyle(card.querySelector('.testimonial-card__quote')!);
    return {
      background: cardStyle.backgroundColor,
      padding: cardStyle.padding,
      radius: cardStyle.borderRadius,
      shadow: cardStyle.boxShadow,
      leadSize: leadStyle.fontSize,
      leadWeight: leadStyle.fontWeight,
      leadLineHeight: leadStyle.lineHeight,
      quoteSize: quoteStyle.fontSize,
      quoteWeight: quoteStyle.fontWeight,
    };
  });

  expect(tokens.background).toBe('rgb(115, 63, 200)');
  expect(tokens.padding).toBe('32px');
  expect(tokens.radius).toBe('8px');
  expect(tokens.shadow).toContain('40px 60px 50px -47px');
  expect(tokens.leadSize).toBe('20px');
  expect(tokens.leadWeight).toBe('600');
  expect(tokens.leadLineHeight).toBe('24px');
  expect(tokens.quoteSize).toBe('13px');
  expect(tokens.quoteWeight).toBe('500');
});

---
artifact: WORKPACK
profile: Express
execution_mode: Continuous documentation
created: 2026-09-16
updated: 2026-09-16
project: Testimonials grid section
---

# Workpack: Testimonials grid section

## 2. Express eligibility

- [x] One bounded source scope or coherent source bundle — the authorized Figma page `🤖 Testimonials grid section` plus the implementation repository baseline.
- [x] One coherent implementation result — one responsive testimonials grid section.
- [x] At most one implementation task — the result can be scaffolded, implemented, and validated as one bounded frontend task.
- [x] No meaningful routing, shared state, persistence, auth, API, migration, deployment, security, privacy, or rollback decision — none is present in the source or repository baseline.
- [x] No unresolved material product decision — the supplied page provides desktop, tablet, and mobile compositions, content, assets, typography, colors, spacing, and effects for the result.
- [x] No coordination requiring separate task ownership — this is a single implementation repository and one implementation unit.
- [x] Independently verifiable result — the rendered page can be compared against the supplied responsive Figma frames and validated with repository checks.

The canonical workflow record selects **Express** with **Continuous documentation**. Express is the smallest valid profile because the work is one static, bounded responsive result with no application-level integration or architectural concerns. The current evidence does not justify a higher profile.

### Upgrade triggers

- Multiple independent tasks/results: None observed; upgrade if implementation discovers a second independent result.
- Connected routes/shared state/integration: None observed; upgrade if introduced.
- Persistence/auth/API/architecture/operational risk: None observed; upgrade if introduced.
- Material source conflict/product decision: None currently known; stop and reassess if one appears.
- Other: Upgrade if the single workpack can no longer preserve clear source, requirement, implementation, or validation ownership.

## 3. Source baseline narrative

Canonical source state is owned by the workflow record; stable project identity and boundaries are owned by `design-workflow.config.json`.

- `SRC-DS-001` — time-bound Figma input. Connected inspection confirmed the configured page `20:2` (`🤖 Testimonials grid section`) and its implementation evidence: Desktop `2001:1882` (1440×1029), Tablet `2012:730` (768×1353), Mobile `2012:1466` (375×2113), plus supporting Style Guide `6018:261` and scoped design variables.
- `SRC-REPO-001` — immutable GitHub baseline at commit `4eefb50b2ac834344ae997a043f2fb000054f1ac`. At that baseline the configured implementation root `.` has no application scaffold: it contains the existing README together with the committed workflow configuration and pinned remote caller.
- Both active inputs were verified through the canonical workflow CLI on 2026-09-16 before Stage 0 review.

Implementation capability resolution from the repository baseline:

- Adapter: `astro-typescript`
- Mode: `scaffold`
- Support level: maintained
- Evidence: the implementation root is safely scaffoldable and contains no existing application/framework to preserve.
- Constraint: adapter resolution does **not** authorize scaffolding. Application files remain forbidden until approved Stage 10 implementation work.

### Source authority, scope, and limitations

- Authority order: repository configuration defines stable project boundaries; the authorized Figma page governs visual/content design evidence inside that scope; the immutable GitHub snapshot governs existing implementation state; the canonical workflow record governs mutable workflow state.
- Included scope: the full authorized Figma page `🤖 Testimonials grid section`, with Desktop/Tablet/Mobile frames as the product result and the Style Guide as supporting token/type evidence; implementation work is bounded to the configured repository implementation root when later authorized.
- Excluded scope: Figma content outside the authorized page, unrelated repository work, backend/API/auth/persistence/routing, production publication, and any design-source mutation not separately required and authorized.
- Conflicts/open questions: none at Stage 0.
- Reproduction/capture evidence: live Figma metadata and design-context inspection of all three responsive frames, screenshots returned by the design-context tool, variable definitions from the Desktop frame, and GitHub inspection of the pinned repository commit/tree.
- Limitations: the Figma source is mutable and has no named-version pin in the supplied URL, so it is time-bound and must be reverified before material implementation; supplied frame widths are reference compositions rather than proven CSS breakpoint values; Figma does not by itself prove semantic HTML, accessibility conformance, or browser behavior.

### Verification narrative

- Method and evidence: `SRC-DS-001` was verified by connected Figma inspection of page `20:2`, responsive frames, Style Guide, and variables; `SRC-REPO-001` was verified by immutable GitHub commit/tree inspection.
- Difference classification: no unexpected source or repository changes were found during Stage 0 verification.
- Rebaseline or impact assessment: not required. Any later material Figma change requires source re-verification and impact assessment before affected implementation work.

### Stage 0 review pass 1 — completeness and correctness

Checked configuration identity, authorized scope, snapshot identities, repository pin, Express eligibility, implementation adapter resolution, and stated limitations against the connected sources. The initial page-level design-context request was not a valid render target, so inspection correctly continued on the Desktop, Tablet, and Mobile child frames without changing or narrowing the authorized page scope. No unresolved Stage 0 information gap remains.

### Stage 0 review pass 2 — consistency, source integrity, authority, and risk

Cross-checked the configured repository with the GitHub baseline and the configured Figma scope with live page metadata. No source conflict or implementation-framework conflict is present. The main ongoing integrity risk is the mutable Figma source; it is explicitly recorded as time-bound and will require verification before implementation. No blocker currently prevents the formal design audit.

## 4. Scope and constraints

- Included: one responsive testimonials grid result represented by the authorized Desktop, Tablet, and Mobile Figma frames; supporting visual tokens and assets inside the authorized page; later repository implementation and validation when workflow state permits.
- Excluded: product features absent from the design, routing, forms or interactions, shared application state, APIs, persistence, authentication/authorization, backend/server behavior, framework migration, and production publishing.
- Repository/technology constraints: current implementation root is scaffoldable; use the maintained Astro + TypeScript adapter when implementation is approved; preserve repository-level workflow/configuration files; do not add React or Tailwind merely because Figma reference code uses them.
- Content/assets constraints: testimonial copy and supplied imagery are source evidence; Figma temporary asset URLs are inspection-only and must not become runtime dependencies. Required images/SVGs must be committed as durable repository assets during authorized implementation.
- Accessibility baseline: implementation is expected to use semantic HTML and accessible native structure; specific accessibility findings and acceptance criteria belong to the formal audit/specification work rather than being invented at intake.
- Browser/device constraints: Figma provides explicit reference compositions at 1440, 768, and 375 CSS-pixel frame widths. Intermediate responsive behavior and exact breakpoint choices require evidence-based implementation decisions during later documentation/planning; they are not assumed from frame names alone.
- Runtime/deployment: no deployment provider or production URL is configured. Runtime evidence is therefore not a Stage 0 prerequisite.

## 5. Observed design evidence and audit

| Evidence ID | Source and precise region | Observation | Classification | Impact |
|---|---|---|---|---|
| `EVD-001` | `SRC-DS-001` → page `20:2` | The authorized page contains three product frames—Desktop `2001:1882` (1440×1029), Tablet `2012:730` (768×1353), Mobile `2012:1466` (375×2113)—plus Style Guide `6018:261`. | Observed | Establishes the responsive evidence set and supporting design-system evidence. |
| `EVD-002` | Desktop `2001:1882` → Content `4002:216` | Five testimonial cards are presented in source order Daniel Clifford, Jonathan Walters, Jeanette Harmon, Patrick Abrams, Kira Whittle. Each card contains avatar, name, “Verified Graduate”, a 20px lead statement, and a 13px quotation. | Observed | Defines repeated content anatomy without yet prescribing implementation component structure. |
| `EVD-003` | Desktop `2001:1882` → Content `4002:216` | Desktop content is 1114px wide at x=165, arranged with 32px inter-card gaps: Daniel spans the wide upper-left position, Jonathan is upper-middle, Jeanette lower-left, Patrick wide lower-middle, and Kira occupies the tall right column. | Observed | Provides the wide-layout composition and relative card spans. |
| `EVD-004` | Tablet `2012:730` → Content `4002:217` | Tablet content is 647px wide at x=60. Daniel is full width; Jonathan and Jeanette share one two-column row at 307.5px each with a 32px gap; Patrick is full width; Kira is full width. | Observed | Demonstrates a concrete intermediate responsive transformation rather than a simple scaled desktop. |
| `EVD-005` | Mobile `2012:1466` → Content `4002:264` | Mobile content is 305px wide at x=35. All five cards stack in source order with 32px vertical separation; card heights grow with text wrapping. | Observed | Demonstrates single-column reflow and preserved reading order at the narrow reference width. |
| `EVD-006` | Desktop cards + variable definitions | Core color variables are purple/500 `#733fc8`, purple/300 `#a775f1`, purple/50 `#ede4ff`, white `#ffffff`, grey/100 `#e7eaee`, grey/200 `#cfcfcf`, grey/400 `#676d7e`, grey/500 `#48556a`, and dark-blue `#19202d`; page background renders as `#f6f5f6`. | Observed | Supplies the visual palette and foreground/background pairings. |
| `EVD-007` | Desktop `2001:1882` → variable definitions | Typography uses Barlow Semi Condensed: 20px/600/1.2 for testimonial lead text, 13px/500/1.4 for body quotes, 13px/500/1.1 for names, and 11px/500/1.1 for role labels. | Observed | Defines the type ramp used throughout the product frames. |
| `EVD-008` | Desktop `2001:1882` → variable definitions + cards | Spacing variables used include 4, 8, 16, 24, and 32px; cards use 32px padding, 16px internal gaps, 8px corner radius, and a shadow token equivalent to color `#48556A3F`, offset 40/60, radius 50, spread -47. | Observed | Provides repeated card geometry/effect evidence. |
| `EVD-009` | Daniel card Desktop `4002:199`, Tablet `4002:220`, Mobile `4002:267` | Daniel’s purple card includes a large decorative quotation-mark SVG behind/near the text area; its placement changes substantially across supplied widths. | Observed | The mark behaves as decorative responsive artwork, not content text. |
| `EVD-010` | Product frames across page `20:2` | Page metadata exposes the testimonial UI as frames, text, ellipses, and one boolean operation; no component or instance nodes are present in the scoped product frames. | Observed | The Figma source demonstrates repetition but does not provide a reusable component API to copy literally. |
| `EVD-011` | File library inspection | Material 3 Design Kit, Simple Design System, and iOS 18/iPadOS 18 libraries are subscribed to the file, but no external-library component instances appear in the scoped product-frame metadata. | Observed | No external component dependency is evidenced for the implementation result. |
| `EVD-012` | Desktop design context and page metadata | Five raster avatar assets and one quotation-mark SVG are referenced by the product; Figma MCP asset URLs are temporary (reported as seven-day availability). | Observed | Durable repository copies will be required before those URLs expire; temporary URLs cannot be runtime dependencies. |
| `EVD-013` | Desktop/Tablet/Mobile design contexts | No controls, form fields, navigation, hover/focus variants, or event behavior are demonstrated in the inspected product frames. | Observed | The source supports a static content presentation; interaction semantics are not evidenced by Figma. |
| `EVD-014` | Desktop/Tablet/Mobile ordering | Visual/source order remains Daniel → Jonathan → Jeanette → Patrick → Kira across all supplied compositions, even when cards change spans/rows. | Observed | Supports a stable document reading order through responsive reflow. |
| `EVD-015` | Text/background token pairs in product frames | Calculated contrast ratios for used text/background pairs are all above 4.5:1 (e.g. white/purple ≈6.41, purple-50/purple ≈5.24, white/grey-500 ≈7.55, grey-400/white ≈5.17, grey-200/dark-blue ≈10.48). | Inferred from observed token values | No obvious normal-text color-contrast blocker is present, while full accessibility still depends on implementation semantics and behavior. |
| `EVD-016` | Kira body text `4002:155` / responsive equivalents | The source copy contains the phrase “developent experience”, an apparent spelling error, and some testimonials contain inconsistent smart quotation marks/spacing. | Observed | Copy fidelity and copy correction must not be conflated; implementation should preserve source text unless an explicit content correction is approved. |

| Finding ID | Finding | Severity | Required action/question | Status |
|---|---|---|---|---|
| `AUD-001` | The supplied widths show three distinct compositions but do not prove exact CSS breakpoint thresholds or interpolation between 375, 768, and 1440px. | Medium | Later responsive specification must define fluid behavior and breakpoint choices from the transformations, not mechanically use frame widths as breakpoints. | Open, non-blocking evidence gap |
| `AUD-002` | Figma demonstrates visual reading order but does not define semantic document structure, heading levels, avatar alternative-text treatment, or screen-reader behavior. | Medium | Later design/specification work must select simple semantic structure and decide whether adjacent-name avatars are redundant/decorative. | Open, non-blocking implementation requirement |
| `AUD-003` | Required avatar and quotation-mark assets are currently available through temporary Figma MCP URLs only. | Medium | During authorized implementation, transfer the five avatars and quote SVG into durable repository assets before using them. | Open until implementation |
| `AUD-004` | Repeated testimonial cards are not represented as Figma components/instances. | Low | Treat repetition as design evidence only; later repository planning may choose an appropriate reusable implementation structure without claiming it came from a Figma component API. | Resolved as source limitation |
| `AUD-005` | The Figma file has subscribed community libraries, but the scoped product frames expose no library component instances. | Low | Do not introduce Material/iOS/Simple Design System dependencies merely because the file subscribes to them. | Resolved |
| `AUD-006` | Source copy contains an apparent “developent” typo and minor quotation-mark/spacing inconsistencies. | Low | Preserve authoritative source copy for fidelity unless the human explicitly authorizes copy editing; surface this as a non-blocking deviation opportunity in the implementation brief. | Resolved for planning; no silent correction |
| `AUD-007` | Figma does not prove browser reflow, semantic accessibility, or runtime font loading. | Medium | Validate these in the repository implementation with semantic markup, responsive browser checks, and an explicit Barlow Semi Condensed loading strategy. | Open until later stages |

### Stage 1 review pass 1 — completeness and correctness

Reviewed the complete authorized page: all three product frames, the Style Guide, design variables, repeated card anatomy, responsive transformations, assets, subscribed libraries, content, and applicable accessibility implications. Corrected the audit to distinguish observed composition from inferred implementation behavior and to avoid treating Figma frame widths as automatic breakpoints. No product-frame region remains uninspected for this static result.

### Stage 1 review pass 2 — consistency, source integrity, authority, and risk

Cross-checked shared content order, card anatomy, colors, typography, spacing, and assets across Desktop/Tablet/Mobile. The responsive frames are mutually consistent in content and order while intentionally changing spans and stacking. Remaining gaps—intermediate-width behavior, semantics, durable assets, and runtime font loading—are explicitly classified as later-stage concerns rather than hidden assumptions. No finding requires a profile upgrade or blocks continuation.

## 6. Expected result

### Requirements

| Requirement ID | Outcome, rule, or constraint | Priority | Evidence/authority |
|---|---|---|---|
| `REQ-FR-001` | The result must present exactly the five testimonials evidenced in the authorized design scope, preserving each person’s identity, role label, lead statement, body quotation, and association with the correct avatar. | Must | `EVD-002`, `SRC-DS-001` |
| `REQ-FR-002` | The five testimonials must remain available in the same meaningful document order—Daniel → Jonathan → Jeanette → Patrick → Kira—across layout conditions. | Must | `EVD-014` |
| `REQ-FR-003` | The layout must reflow from the supplied wide composition through the supplied intermediate composition to a single-column narrow composition without losing, duplicating, or reordering testimonial content. | Must | `EVD-003`, `EVD-004`, `EVD-005`, `AUD-001` |
| `REQ-NFR-001` | At the supplied 1440px, 768px, and 375px reference widths, the rendered result must materially match the Figma composition, typography hierarchy, color roles, spacing rhythm, card shapes/effects, and relative visual emphasis. | Must | `EVD-001`, `EVD-003`–`EVD-009` |
| `REQ-NFR-002` | Across the responsive range exercised during validation, content must reflow without horizontal page scrolling, unintended clipping, text overlap, or inaccessible off-screen content. | Must | `AUD-001`, `AUD-007`; workflow quality baseline |
| `REQ-AR-001` | The implementation must expose the testimonial content in a logical semantic reading order consistent with the stable source order, independent of visual grid placement. | Must | `EVD-014`, `AUD-002` |
| `REQ-AR-002` | Decorative artwork must not create redundant assistive-technology output, and avatar treatment must avoid repeating information already conveyed by the adjacent person name unless the image itself is intended to add distinct meaning. | Must | `EVD-009`, `AUD-002`; accessibility quality baseline |
| `REQ-AR-003` | Text/background combinations used by the source design must retain at least WCAG AA normal-text contrast (4.5:1); implementation must not introduce a lower-contrast substitution for those roles. | Must | `EVD-006`, `EVD-015` |
| `REQ-BR-001` | Source testimonial copy is authoritative for this implementation. Apparent spelling, punctuation, or spacing issues must not be silently rewritten; any copy correction requires explicit human approval. | Must | `EVD-016`, `AUD-006`, source-authority rule |
| `REQ-CON-001` | Required visual assets must be stored as durable repository assets before they become runtime dependencies; temporary Figma MCP URLs must not be committed as production asset sources. | Must | `EVD-012`, `AUD-003` |
| `REQ-CON-002` | The result must remain a static frontend presentation unless new approved evidence introduces interaction, routing, data, or application-state requirements. | Must | `EVD-013`, Express eligibility evidence |
| `REQ-NFR-003` | Typography must preserve the evidenced Barlow Semi Condensed family and source weight/size/line-height roles closely enough that text wrapping and card proportions remain faithful at the supplied reference widths. | Must | `EVD-007`, `AUD-007` |

Assumptions and recommendations are intentionally limited. No browser-support matrix, performance threshold, backend behavior, persistence rule, authentication rule, or security policy is invented because the source does not establish them. The implementation technology constraint remains owned by the Stage 0 repository capability decision and later repository-aware planning, not by product requirements.

#### Stage 2 review pass 1 — completeness and correctness

Checked functional outcome, responsive quality, source-copy authority, durable assets, accessibility, and visual-fidelity expectations against the audit. Removed implementation-specific choices from the requirements: no CSS mechanism, breakpoint number, component file structure, font-delivery package, or test framework is prescribed here. Requirements cover all currently material audit findings without creating unsupported product behavior.

#### Stage 2 review pass 2 — consistency, traceability, risks, and uncertainty

Every material requirement traces to source evidence, an explicit source-authority rule, or an applicable accessibility/workflow quality baseline. `AUD-001`, `AUD-002`, `AUD-003`, and `AUD-007` are carried forward as requirements without pretending Figma proves the missing behavior. `REQ-BR-001` keeps the observed copy typo as a source-authority issue rather than silently resolving it. No requirement conflicts with Express eligibility or the repository baseline, and no open requirement requires human clarification before design intent is documented.

### Design intent

| Design ID | Intent | Evidence | Confidence |
|---|---|---|---|
| `DES-001` | Treat the five cards as one peer testimonial collection whose primary visual hierarchy is profile identity → lead statement → supporting quotation. No visible collection heading is evidenced in the source. | `EVD-002`, `REQ-FR-001` | Observed |
| `DES-002` | Keep a consistent card anatomy across all testimonials: compact profile row, strong 20px lead statement, smaller supporting quotation, 32px internal padding, 16px vertical rhythm, rounded corners, and the shared soft shadow. | `EVD-002`, `EVD-007`, `EVD-008`, `REQ-NFR-001` | Observed |
| `DES-003` | Preserve the source’s card-specific color roles: Daniel uses purple/500 with white and purple/50 text; Jonathan uses grey/500 with white and grey/100; Jeanette and Kira use white with grey/500 and grey/400; Patrick uses dark-blue with grey/200 and grey/100. | `EVD-006`, `EVD-015`, `REQ-NFR-001`, `REQ-AR-003` | Observed |
| `DES-004` | Daniel’s oversized quotation mark is decorative visual texture layered behind the card content; it should not be exposed as quotation content or alter reading order. | `EVD-009`, `REQ-AR-002` | Observed |
| `DES-005` | The overall canvas remains quiet and neutral (`#f6f5f6`) so the varied testimonial cards carry the visual emphasis; the content block is centered within generous outer space at each supplied viewport. | `EVD-001`, `EVD-003`–`EVD-005`, `REQ-NFR-001` | Observed |
| `DES-006` | Typography uses Barlow Semi Condensed throughout, with lead text visually dominant over names/roles and body quotations. Weight, size, and line-height roles should remain consistent even as line wrapping changes with width. | `EVD-007`, `REQ-NFR-003` | Observed |
| `DES-007` | Long testimonial content is allowed to determine card height at narrow widths; no text is truncated, collapsed, or hidden to force uniform card heights. | `EVD-005`, Kira `4002:303`, `REQ-FR-001`, `REQ-NFR-002` | Observed at mobile; inferred between widths |
| `DES-008` | Preserve source copy exactly, including the observed “developent” spelling and quotation-mark inconsistencies, unless a separate human-approved content correction supersedes the source. | `EVD-016`, `REQ-BR-001` | Confirmed by source-authority rule |
| `DES-RWD-001` | Preserve one stable reading/source order—Daniel, Jonathan, Jeanette, Patrick, Kira—while changing only visual placement and span. | `EVD-014`, `REQ-FR-002`, `REQ-AR-001` | Observed |
| `DES-RWD-002` | In the wide composition, use the source’s asymmetric five-card grid: Daniel wide upper-left, Jonathan upper-middle, Jeanette lower-left, Patrick wide lower-middle, and Kira spanning the tall right column. | `EVD-003`, `REQ-FR-003`, `REQ-NFR-001` | Observed |
| `DES-RWD-003` | In the intermediate composition, Daniel becomes full width; Jonathan and Jeanette share a two-column row; Patrick and Kira each become full width below. | `EVD-004`, `REQ-FR-003`, `REQ-NFR-001` | Observed |
| `DES-RWD-004` | In the narrow composition, all five cards become a single vertical column with the same content order and approximately the source’s 32px inter-card rhythm. | `EVD-005`, `REQ-FR-003`, `REQ-NFR-001` | Observed |
| `DES-RWD-005` | Between supplied examples, card widths should remain fluid and the composition should transition when the current arrangement can no longer preserve readable content, intended gaps, and the no-overflow requirement—not at a breakpoint chosen merely because a Figma frame is named “Tablet”. | `AUD-001`, `REQ-FR-003`, `REQ-NFR-002` | Recommended to resolve missing intermediate-width evidence |
| `DES-RWD-006` | Daniel’s decorative quotation mark may reposition within its card as available width changes, but it remains behind content and must not obscure the profile or primary statement. | `EVD-009`, `REQ-NFR-002` | Observed transformation; recommended interpolation |
| `DES-RWD-007` | Outside the supplied width examples, preserve the nearest evidenced composition rather than scaling indefinitely: wider viewports keep the wide content block centered without stretching it beyond the Desktop reference proportions; narrower-than-Mobile viewports continue the single-column flow with fluid outer gutter and normal text wrapping so content remains visible. | `EVD-003`, `EVD-005`, `REQ-NFR-002` | Recommended during Stage 5 consistency review to close unsupplied-width behavior |
| `DES-009` | The five avatars remain visually paired with their adjacent names. Because the text already identifies each person, treating the raster portraits as redundant/decorative for assistive technology is the preferred accessibility intent unless implementation inspection reveals distinct informational value. | `EVD-002`, `AUD-002`, `REQ-AR-002` | Recommended |
| `DES-010` | Use the design tokens evidenced in the scoped file as the visual source of truth; subscribed Material 3, Simple Design System, and iOS libraries do not define this result because no scoped component instances depend on them. | `EVD-006`–`EVD-011`, `AUD-005` | Observed |
| `DES-INT-001` | The testimonial cards are static content containers. No hover, pressed, selected, expanded, focus, drag, or navigation state is evidenced, so no interactive state should be introduced merely for visual effect. | `EVD-013`, `REQ-CON-002` | Observed |
| `DES-INT-002` | No motion or transition is evidenced. Responsive rearrangement is layout reflow rather than an animated interaction; reduced-motion behavior is therefore not material unless motion is later introduced. | `EVD-013`, `REQ-CON-002` | Observed |

#### Stage 3 review pass 1 — completeness and correctness

Covered information hierarchy, card anatomy, visual system, responsive transformations, long-content behavior, decorative artwork, assets/design-system context, accessibility intent, and the absence of interaction/motion. Removed raw CSS-style prescriptions and kept the document focused on visual and behavioral intent rather than repository structure.

#### Stage 3 review pass 2 — consistency, traceability, risks, and uncertainty

Each design decision traces to audit evidence and applicable requirements. Observed Desktop/Tablet/Mobile transformations are separated from recommended interpolation rules for unsupplied widths. No exact breakpoint is presented as source truth. Accessibility recommendations for avatar redundancy and decorative quotation artwork are explicitly distinguished from Figma-proven behavior. Stage 5 added `DES-RWD-007` to make unusually narrow/wide intent explicit without inventing a support matrix. No design decision expands the scope beyond a static Express-eligible result.

### Specification and acceptance criteria

| Specification ID | Observable behavior | Related requirements/design | Validation |
|---|---|---|---|
| `SPEC-BEH-001` | Render exactly five testimonial cards in document order Daniel Clifford → Jonathan Walters → Jeanette Harmon → Patrick Abrams → Kira Whittle. Each card contains its source avatar, name, `Verified Graduate` role, lead statement, and full quotation; no testimonial content is omitted, duplicated, truncated, or reassigned. | `REQ-FR-001`, `REQ-FR-002`, `DES-001`, `DES-RWD-001` | DOM/content inspection plus screenshot review. |
| `SPEC-BEH-002` | At a 1440px viewport, the composition follows the supplied wide reference: Daniel occupies the wide upper-left region, Jonathan the upper-middle, Jeanette the lower-left, Patrick the wide lower-middle, and Kira the tall right column. The content block is centered at approximately the observed 1114px width with 32px inter-card gaps and the relative two-column spans shown in Desktop `2001:1882`. | `REQ-FR-003`, `REQ-NFR-001`, `DES-RWD-002` | Browser screenshot comparison at 1440px against Desktop reference. |
| `SPEC-BEH-003` | At a 768px viewport, Daniel is full width; Jonathan and Jeanette form the only two-card row; Patrick is full width below them; Kira is full width last. The centered content block is approximately the observed 647px width and the two-card row keeps a 32px gap like Tablet `2012:730`. | `REQ-FR-003`, `REQ-NFR-001`, `DES-RWD-003` | Browser screenshot comparison at 768px against Tablet reference. |
| `SPEC-BEH-004` | At a 375px viewport, all five cards form one vertical column in source order, matching the observed 305px content width with 35px side gutters and about 32px between cards, while card height expands to fit the full source text. | `REQ-FR-003`, `REQ-NFR-001`, `DES-RWD-004`, `DES-007` | Browser screenshot comparison at 375px against Mobile reference. |
| `SPEC-BEH-005` | Between supplied viewport examples, the layout remains fluid and switches composition before the current arrangement would cause horizontal page scrolling, overlapping cards/text, clipping, or loss of the intended inter-card spacing/readability. The exact transition width is an implementation/validation decision, not source truth. Document order remains unchanged through every transition. | `REQ-FR-003`, `REQ-NFR-002`, `DES-RWD-001`, `DES-RWD-005` | Resize/browser checks at representative intermediate widths and around each selected transition. |
| `SPEC-BEH-006` | Every card preserves the evidenced visual roles: 32px internal padding, 16px principal vertical gap, 8px corner radius, shared soft shadow, source-specific background/foreground colors, and the Barlow Semi Condensed type hierarchy (20px/600/1.2 lead; 13px/500/1.4 quote; 13px/500/1.1 name; 11px/500/1.1 role), allowing normal font-rendering tolerance. | `REQ-NFR-001`, `REQ-NFR-003`, `DES-002`, `DES-003`, `DES-006` | Computed-style inspection and visual comparison at supplied widths. |
| `SPEC-BEH-007` | Daniel’s quotation-mark artwork remains visually behind the card content and may reposition with width, but never obscures the avatar/profile or lead statement and never participates in text flow. | `REQ-NFR-002`, `DES-004`, `DES-RWD-006` | Screenshot review at supplied and transition-adjacent widths. |
| `SPEC-BEH-008` | At viewports wider than the 1440px reference when exercised during validation, the testimonial block stays centered and does not expand beyond approximately the Desktop reference’s 1114px content width; additional width becomes outer whitespace rather than stretched cards. | `REQ-NFR-002`, `DES-RWD-007` | One representative wider-than-reference browser check selected during planning. |
| `SPEC-BEH-009` | At viewports narrower than the 375px reference when exercised during validation, the single-column order remains, the card/content width contracts with the viewport, outer gutter may reduce from the observed 35px, text wraps naturally, and no horizontal page scroll or clipping is introduced. No minimum supported viewport is asserted by this requirement. | `REQ-NFR-002`, `DES-RWD-007` | One representative narrower-than-reference browser check selected during planning. |
| `SPEC-DATA-001` | Testimonial strings are copied from the authorized Figma source without silent spelling, punctuation, quotation-mark, or spacing corrections; the observed `developent experience` wording remains unless the human explicitly approves a source-copy change. | `REQ-BR-001`, `DES-008` | Source-to-rendered-content comparison. |
| `SPEC-ACC-001` | Semantic/document order is Daniel → Jonathan → Jeanette → Patrick → Kira regardless of visual grid placement. CSS/layout positioning must not change assistive-technology reading order. | `REQ-AR-001`, `DES-RWD-001` | DOM order inspection and accessibility-tree/semantic review. |
| `SPEC-ACC-002` | The decorative quotation mark is hidden from assistive technology or implemented as non-semantic decoration. Portrait avatars use empty alternative text when the adjacent visible name supplies the same identity, unless later evidence establishes distinct informational content. | `REQ-AR-002`, `DES-004`, `DES-009` | DOM/accessibility-tree inspection. |
| `SPEC-ACC-003` | Source text/background color roles retain at least a 4.5:1 contrast ratio for normal text; implementation substitutions must not reduce any used pair below that threshold. | `REQ-AR-003`, `DES-003` | Automated/manual contrast calculation from rendered colors. |
| `SPEC-INT-001` | Testimonial cards expose no invented click, hover-only, expanded, selected, drag, or navigation behavior. The finished section adds no focusable control solely for presentation and no motion is required for responsive reflow. | `REQ-CON-002`, `DES-INT-001`, `DES-INT-002` | Keyboard tab-through and DOM/interactivity inspection. |
| `SPEC-VAL-001` | The five avatar images and quotation-mark SVG used by the delivered page resolve from durable repository-controlled assets; no production markup or stylesheet references a temporary `figma.com/api/mcp/asset` URL. | `REQ-CON-001`, `AUD-003` | Repository search plus built-page/network asset inspection. |
| `SPEC-VAL-002` | Barlow Semi Condensed is actually available to the rendered page at the required 500 and 600 weights; if the primary font fails to load during validation, the result is not considered visually validated against Figma. | `REQ-NFR-003`, `AUD-007`, `DES-006` | Browser computed-font/network inspection. |

No loading, empty, error, disabled, retry, authentication, persistence, or server-failure states are specified because the approved result is static content and no source evidence establishes those states.

#### Acceptance criteria

- [ ] `AC-001` — At runtime there are exactly five testimonial cards, and their DOM/content order is Daniel, Jonathan, Jeanette, Patrick, Kira. (`SPEC-BEH-001`, `SPEC-ACC-001`)
- [ ] `AC-002` — Each card’s visible name, role, lead statement, full quotation, and avatar association match `SRC-DS-001`; Kira’s source `developent experience` wording is unchanged unless a later approved content decision supersedes it. (`SPEC-BEH-001`, `SPEC-DATA-001`)
- [ ] `AC-003` — A 1440px browser capture materially matches Desktop `2001:1882` in card placement/spans, centered content block, 32px grid rhythm, typography hierarchy, palette, radius, shadow, and Daniel quotation artwork. (`SPEC-BEH-002`, `SPEC-BEH-006`, `SPEC-BEH-007`)
- [ ] `AC-004` — A 768px browser capture materially matches Tablet `2012:730`: Daniel full width; Jonathan + Jeanette two-up; Patrick full width; Kira full width; no content loss or overlap. (`SPEC-BEH-003`)
- [ ] `AC-005` — A 375px browser capture materially matches Mobile `2012:1466`: one 305px centered column, five cards in source order, roughly 32px gaps, full untruncated copy, and no horizontal page scroll. (`SPEC-BEH-004`)
- [ ] `AC-006` — Resizing through representative widths between 375 and 1440px, including immediately around implementation-selected layout transitions, produces no horizontal page scrolling, card/text overlap, unintended clipping, missing content, or DOM reordering. (`SPEC-BEH-005`)
- [ ] `AC-007` — Computed typography uses Barlow Semi Condensed at the evidenced 500/600 weights and source size/line-height roles at the three reference widths; text wrapping is close enough to preserve the source card proportions without truncation. (`SPEC-BEH-006`, `SPEC-VAL-002`)
- [ ] `AC-008` — Rendered source color pairs remain at or above 4.5:1 contrast for normal text. (`SPEC-ACC-003`)
- [ ] `AC-009` — The decorative quotation mark is absent from the accessibility tree, and testimonial avatars do not redundantly announce each visible person name. (`SPEC-ACC-002`)
- [ ] `AC-010` — Keyboard tabbing reveals no testimonial-card focus stops or invented interactive behavior; layout changes do not add motion. (`SPEC-INT-001`)
- [ ] `AC-011` — Repository/build output contains durable copies/references for all five avatars and the quotation-mark SVG, and a repository search finds no `figma.com/api/mcp/asset` runtime dependency. (`SPEC-VAL-001`)
- [ ] `AC-012` — At the supplied reference widths, computed card padding, principal internal gap, corner radius, colors, and shadow materially correspond to the evidenced design tokens. (`SPEC-BEH-006`)
- [ ] `AC-013` — At one planning-selected width wider than 1440px the content remains centered and capped near the Desktop reference width, and at one planning-selected width narrower than 375px the single-column layout remains fully visible without horizontal scrolling; these checks validate graceful behavior without claiming a browser-support matrix. (`SPEC-BEH-008`, `SPEC-BEH-009`)

#### Stage 4 review pass 1 — completeness and correctness

Translated every material requirement and design intent into observable behavior without prescribing repository paths, component names, CSS mechanisms, or an unsupported breakpoint number. Covered the three supplied viewport compositions, interpolation/failure conditions, long content, visual tokens, decorative artwork, source-copy authority, semantic order, redundant imagery, contrast, static interaction scope, durable assets, and font availability. Non-applicable dynamic-data/error states are explicitly excluded rather than invented.

#### Stage 4 review pass 2 — consistency, traceability, risks, and uncertainty

Specification IDs use the canonical namespaces and trace back to `REQ-*` plus relevant `DES-*` decisions. Acceptance criteria are reproducible through browser screenshots, resize checks, DOM/accessibility inspection, computed-style/contrast checks, and repository/build inspection. The exact responsive transition widths remain intentionally unresolved for repository-aware planning because Figma does not prove them; the specification instead defines the observable failure conditions transitions must prevent. Stage 5 added explicit wider/narrower reference behavior and `AC-013` without asserting unsupported viewport coverage. No hidden architecture or new product behavior was introduced.

#### Stage 5 review pass 1 — completeness and correctness across Stages 1–4

Challenged the audit, requirements, design intent, specification, and acceptance criteria against the active source baseline. One material documentation gap was found: responsive intent covered the three supplied examples and interpolation between them but not behavior just outside the narrowest/widest examples. Corrected the owning design and specification with `DES-RWD-007`, `SPEC-BEH-008`, `SPEC-BEH-009`, and `AC-013`. Rechecked content completeness, accessibility applicability, long-content behavior, interaction/state scope, asset durability, font availability, and visual-fidelity validation; no other missing material behavior or unsupported rule remains.

#### Stage 5 review pass 2 — consistency, traceability, source integrity, and risk

Cross-checked `EVD-*` → `REQ-*` → `DES-*` → `SPEC-*` → `AC-*` traceability. Observed source facts remain distinct from inferred/recommended responsive and accessibility decisions. No exact breakpoint, browser-support range, backend behavior, interaction, or content correction is falsely attributed to Figma. The active time-bound Figma snapshot and immutable repository baseline remain the only input authorities; no design mutation or competing source was introduced during documentation. Open implementation-time risks are explicit: Figma must be reverified before code work, temporary assets must become durable repository files, Barlow Semi Condensed must load successfully, and selected responsive transition widths must be validated in-browser. The documentation set is internally consistent and ready for repository-aware planning, not yet authorized for implementation.

### Architecture decision

**Decision:** Architecture is **not required** for this Express work.

**Rationale:** The approved result is one static responsive page section with one implementation unit. The active requirements and specification introduce no routing/navigation architecture, shared state, client/server data flow, API or third-party integration, persistence or migration, authentication/authorization, background work, multi-package/service boundary, architectural framework migration, deployment/runtime requirement, security/privacy boundary, reliability/observability subsystem, or cross-feature accessibility behavior. The repository baseline contains no existing application architecture to preserve; it is a safely scaffoldable root. Selecting the maintained Astro + TypeScript scaffold adapter is an implementation-environment/planning concern and does not itself create a meaningful architectural boundary.

**Consequence:** Do not create `ARCHITECTURE.md` or introduce architectural layers for their own sake. Repository structure, component reuse, CSS/layout choices, asset placement, responsive transitions, and validation commands belong in the implementation plan. If later evidence introduces any architecture-triggering concern or a second independent result, stop affected work and reassess the Express profile before implementation.

#### Stage 6 architecture review pass 1 — completeness and correctness

Checked every architecture trigger named by the workflow against `SRC-REPO-001`, the requirements, and the specification. None applies to the approved static scope. The decision does not rely on framework stereotypes and does not confuse the future Astro scaffold with an existing architecture.

#### Stage 6 architecture review pass 2 — consistency, traceability, risk, and uncertainty

The not-required decision is consistent with Express eligibility, the repository baseline, `REQ-CON-002`, and the absence of data/integration/state/runtime concerns. Behavioral/accessibility constraints remain owned by the specification; repository structure remains deferred to planning. No unresolved structural decision is being hidden by skipping architecture, and the documented upgrade trigger remains active if scope changes.

## 7. Repository-aware implementation approach

The current branch still contains no application scaffold. Existing repository-owned files are `README.md`, `design-workflow.config.json`, `.github/workflows/design-workflow-command.yml`, `.workflow/**`, and this `WORKPACK.md`; none supplies application components, styles, package scripts, test infrastructure, or reusable UI tokens. The maintained `astro-typescript` adapter therefore remains valid in scaffold mode. Its pinned scaffold baseline uses Node 22.12+ (maintained local environment Node 24), npm with a lockfile, Astro 7, TypeScript, `astro check`, a production build, Playwright Chromium, axe-core, and `.github/workflows/validate-ui.yml`. The toolkit scaffold is implementation guidance at the pinned toolkit revision, not a vendored project dependency.

### Planned repository changes

| Plan ID | Objective and upstream references | Existing/proposed paths | Approach and validation |
|---|---|---|---|
| `PLAN-001` | Establish the maintained Astro + TypeScript application/validation baseline without disturbing workflow-owned repository state. Supports all `REQ-*`; especially `REQ-CON-002`, `SPEC-VAL-002`. | Preserve existing `README.md`, `design-workflow.config.json`, `.workflow/**`, `.github/workflows/design-workflow-command.yml`. Proposed: `.gitignore`, `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `playwright.config.ts`, `.github/workflows/validate-ui.yml`. | Materialize only the minimal maintained scaffold files required by the adapter, replace all sample/fixture content, keep npm/lockfile versions aligned with the pinned adapter, and avoid React/Tailwind or unrelated dependencies. Validate with `npm ci`, `npm run check`, and `npm run build`; the CI workflow must emit evidence for the exact tested implementation commit. |
| `PLAN-002` | Implement the testimonial content and visual system with durable assets and semantic document order. Supports `REQ-FR-001`, `REQ-FR-002`, `REQ-NFR-001`, `REQ-NFR-003`, `REQ-AR-001`, `REQ-AR-002`, `REQ-AR-003`, `REQ-BR-001`, `REQ-CON-001`; `SPEC-BEH-001`, `SPEC-BEH-006`, `SPEC-BEH-007`, `SPEC-DATA-001`, `SPEC-ACC-001`–`003`, `SPEC-VAL-001`–`002`. | Proposed: `src/pages/index.astro`, `src/components/TestimonialCard.astro`, `src/styles/global.css`, `public/assets/avatar-daniel.*`, `avatar-jonathan.*`, `avatar-jeanette.*`, `avatar-patrick.*`, `avatar-kira.*`, `bg-pattern-quotation.svg`, and repository-local Barlow Semi Condensed 500/600 font assets in a meaningful `public/assets/fonts/` location if an authoritative redistributable source can be transferred. | Keep testimonial data in source order and render one presentational Astro component per entry. Use semantic static markup; avatars are visually present with empty alt text because adjacent names identify the people; the quotation graphic is CSS/background or otherwise hidden from assistive technology. Define shared CSS custom properties from the evidenced colors, spacing, type roles, radius, and shadow. Preserve source copy exactly, including `developent experience`. If durable font transfer cannot be established from an authoritative source, stop the font-dependent fidelity claim rather than using an unapproved substitute. |
| `PLAN-003` | Reproduce the three responsive compositions and safe behavior between/outside them. Supports `REQ-FR-003`, `REQ-NFR-001`, `REQ-NFR-002`; `DES-RWD-001`–`007`; `SPEC-BEH-002`–`009`. | Primarily proposed `src/styles/global.css` plus class hooks in `src/pages/index.astro` / `TestimonialCard.astro`; no JavaScript layout state. | Use CSS Grid so DOM order never changes. Wide mode is a four-column grid where Daniel/Patrick span two columns and Kira spans two rows; intermediate mode is two columns with Daniel/Patrick/Kira spanning both and Jonathan/Jeanette one each; narrow mode is one column. Keep a centered max-width near the 1114px Desktop evidence and fluid side gutters. Select the two transition values during implementation from actual container-fit/failure checks (roughly the point where four or two readable card columns plus 32px gaps no longer fit), then test immediately above/below them; do not treat 768px/1440px frame labels as automatic CSS breakpoints. Exercise 1440, 768, 375, one wider reference, one narrower reference, representative intermediate widths, and long-content wrapping. |
| `PLAN-004` | Add regression protection for content, accessibility, assets, responsive behavior, and visual evidence. Supports all `AC-001`–`AC-013`. | Proposed: adapt the maintained scaffold test at `tests/site.spec.ts` and add `.github/workflows/validate-ui.yml`; generated screenshots/results remain validation evidence, not source design. | Replace the scaffold sample assertions with testimonial-specific Playwright coverage: exactly five cards and source order/copy, no unwanted focusable card controls, no horizontal overflow at required widths, durable asset URLs, loaded Barlow Semi Condensed 500/600, and axe-core results. Capture browser screenshots at 1440/768/375 plus transition-adjacent widths for inspection against Figma. Run deterministic install, Astro/type checks, build, Chromium setup, and `npm run test:e2e`. Do not claim pixel-perfect automated comparison unless such a reference harness is actually created and run. |

### Integration details

- **Responsive implementation:** CSS-only grid/reflow; no duplicated markup or DOM reordering. The four/two/one-column mapping is derived directly from the supplied card widths/spans. Exact media-query thresholds are finalized only after browser fit testing against `SPEC-BEH-005`.
- **Semantics/accessibility:** one static testimonial collection in source order; no invented heading if none is needed for page structure, no interactive card wrappers, empty avatar alt text when the adjacent name duplicates identity, quotation artwork hidden from the accessibility tree, source contrast roles preserved, and axe/manual keyboard/DOM checks integrated with the same implementation task.
- **State/error handling:** no loading, empty, retry, disabled, selected, or server-error states are applicable to this static approved scope. Missing local assets or font failure are validation failures, not UI states to invent.
- **Assets/content:** copy remains source-authoritative. Five avatars and the quote SVG must be transferred from Figma while available and committed under durable project paths before runtime use. Required font files should likewise be repository-controlled when a lawful authoritative transfer is available; temporary Figma URLs and localhost URLs are forbidden runtime dependencies.
- **Tests/manual checks:** maintained npm/Astro/Playwright/axe checks plus screenshot inspection at the supplied viewports. The existing repository has no native application test commands to preserve, so the pinned maintained scaffold commands are the evidence-backed baseline.
- **Risks/regressions:** Figma remains time-bound and must be reverified before implementation; temporary Figma assets can expire; font transfer/loading can block faithful typography; breakpoint values require fit-based validation; large shadow extents can create accidental overflow if implemented literally; workflow/configuration files and the command bridge must remain untouched by application scaffolding.

#### Stage 7 review pass 1 — feasibility and completeness

Rechecked the current branch tree and confirmed there is still no package manifest, lockfile, framework configuration, application source, reusable UI, or application test infrastructure. Planning therefore uses the maintained Astro scaffold rather than pretending repository conventions already exist. Every proposed path is labeled as proposed, required visual assets and font availability are included before fidelity validation, responsive/accessibility work is integrated rather than deferred, and no implementation code has been created.

#### Stage 7 review pass 2 — consistency, traceability, risk, and uncertainty

`PLAN-001`–`PLAN-004` trace to the approved requirements/specification and the architecture-not-required decision. The plan preserves the repository-level workflow files, introduces no React/Tailwind/backend/state system, keeps source copy authoritative, and does not promote Figma frame widths into arbitrary breakpoints. The remaining uncertainties are implementation-time evidence questions rather than product decisions: exact responsive transition values, successful durable font acquisition/loading, and current Figma asset availability. Each has an explicit validation or stop condition, so no unresolved consequential decision blocks task decomposition.

## 8. Single implementation unit

- **Task ID:** `P01-T01`
- **Objective:** Scaffold the maintained Astro + TypeScript baseline, implement the complete static responsive testimonials grid from the authorized Figma page, commit durable design/font assets, and validate `AC-001`–`AC-013` in one independently verifiable implementation output.
- **Task-start baseline:** The canonical task is based on `SRC-REPO-001`. At actual Stage 10 start, the CLI must resolve a Task-start repository checkpoint at current `HEAD` after confirming that intervening history is workflow-only and approved planning remains current.
- **Upstream references:** `PLAN-001`, `PLAN-002`, `PLAN-003`, `PLAN-004`. Together they cover the approved requirements, design/specification behavior, acceptance criteria, repository integration, and validation strategy.
- **Prerequisites:** None.
- **Repository context:** The implementation root is safely scaffoldable. Preserve `README.md`, `design-workflow.config.json`, `.workflow/**`, and `.github/workflows/design-workflow-command.yml`; follow the maintained `astro-typescript` adapter; do not add React, Tailwind, backend/state infrastructure, or unrelated dependencies.
- **Included files/behavior:** Minimal Astro/npm/TypeScript/Playwright configuration and lockfile; `src/pages/index.astro`; `src/components/TestimonialCard.astro`; `src/styles/global.css`; durable repository assets for all five avatars, the quotation SVG, and Barlow Semi Condensed 500/600; adapted `tests/site.spec.ts`; `.github/workflows/validate-ui.yml`; static five-card source content; semantic source order; accessible decorative imagery; CSS-only 4/2/1 responsive grid; fit-derived transition widths; no invented interaction or motion.
- **Excluded work:** Figma/source-design edits, copy correction, routing/forms/shared state, API/backend/auth/persistence, interactive card states, unrelated repository changes, production deployment/publishing, or profile/architecture expansion without a new approved decision.
- **Ordered implementation steps:**
  1. Reverify the time-bound Figma scope and exact Desktop/Tablet/Mobile evidence immediately before code work; capture current design assets while available.
  2. Start `P01-T01` canonically at Stage 10 so the CLI resolves the actual current repository checkpoint and fails closed on non-workflow drift.
  3. Materialize the minimum pinned Astro + TypeScript scaffold/configuration, lockfile, Playwright/axe setup, and validation workflow; do not retain sample application content.
  4. Transfer the five avatars and quotation SVG into durable repository paths and obtain/load repository-controlled Barlow Semi Condensed 500/600 from an authoritative redistributable source. Block the affected fidelity criteria if required assets/fonts cannot be established.
  5. Implement the five testimonials once, in canonical source order, using semantic Astro markup and `TestimonialCard.astro`; preserve the Figma copy exactly, including `developent experience`; use empty avatar alternative text and non-semantic/decorative quotation artwork.
  6. Implement the evidenced colors, typography, spacing, radius, shadow, and CSS Grid compositions in `global.css`: wide 4-column, intermediate 2-column, narrow 1-column. Select exact transitions from browser fit/failure evidence rather than Figma frame labels.
  7. Adapt `tests/site.spec.ts` to verify content/order, assets, required font weights, no invented focusable behavior, axe accessibility, overflow/reflow behavior, and required viewport evidence.
  8. Run all declared build/static, functional, accessibility, responsive, and visual validations; capture/inspect screenshots at 1440, 768, 375 and transition-adjacent/wider/narrower widths; repair failures before completion.
  9. Commit an implementation-only output, keep later workflow bookkeeping separate, and complete `P01-T01` canonically against the exact tested implementation SHA.
- **Required validation:** Five canonical checks are declared before task readiness: `Build and static checks`, `Functional regression`, `Accessibility`, `Responsive behavior`, and `Visual fidelity`. All are required and must be `Passed` on the exact implementation output before task completion.
- **Acceptance criteria:** `AC-001`–`AC-013`.
- **Risks/discoveries/deviations:** Reverify mutable Figma input; capture expiring asset exports; establish repository-controlled Barlow font files; derive breakpoints from fit evidence; guard against shadow-induced overflow. A material Figma change, missing required asset/font, unexpected implementation-scope repository drift, architecture trigger, or scope expansion blocks affected work and requires impact assessment/replanning instead of a silent deviation.
- **Definition of Done:** All five required validation checks pass; `AC-001`–`AC-013` are satisfied; no temporary Figma runtime URL remains; Barlow Semi Condensed 500/600 is verified in-browser; exact output commit is recorded canonically; application changes stay in approved scope; and the Workpack implementation narrative records any discoveries or approved deviations.

### Stage 9 decomposition review

Checked that Express has exactly one independently verifiable implementation task with no prerequisites; the task references all four required plan items; responsive/accessibility/content/state/error/testing concerns are integrated into the same objective; the five required validation checks are declared before readiness; and implementation remains forbidden while execution mode is Continuous documentation. No second task, hidden dependency, or profile upgrade is required by the approved scope.

### Human implementation approval

- **Actor:** Human project owner (`ferfalcon`) in this ChatGPT session.
- **Approval evidence:** Explicit message on 2026-09-16: “I approve, proceed”.
- **Approved artifact revision:** `WORKPACK.md` blob `621ad7dc9deb85bc7eeae2bef77957d3f2b624e2`, the reviewed Stage 9 narrative presented at the Brief and final review checkpoint.
- **Approved scope:** The complete single Express task `P01-T01` exactly as defined above, including `PLAN-001`–`PLAN-004`, `AC-001`–`AC-013`, the Astro + TypeScript maintained scaffold, responsive/accessibility/content/asset/font requirements, all five required validations, stated exclusions, and execution-time stop conditions.
- **Authorization boundary:** This approval permits the workflow to switch to Task-by-task mode and implement `P01-T01` sequentially. It does not authorize copy corrections, Figma/source-design mutation, unrelated repository work, scope expansion, architecture/profile expansion, production publication, or bypassing any source-integrity/validation stop condition. Final implementation acceptance remains a separate explicit human decision.

## 9. Review pass 1 — Completeness and correctness

Adversarially checked the Stage 7 plan against the exact Figma scope, all must-have requirements/specifications, the architecture-not-required decision, the current branch tree, and the pinned maintained Astro adapter. The plan covers application scaffolding, visual/content fidelity, durable assets, font availability, semantic order, accessibility, responsive interpolation and out-of-range behavior, long-content, static-state scope, CI/browser checks, and regression evidence.

### Corrections

- Corrected `PLAN-004` from an invented/ambiguous `tests/testimonials.spec.ts` path to the pinned scaffold’s actual Playwright path, `tests/site.spec.ts`, which will be adapted rather than creating a parallel test convention.
- Confirmed that the plan does not require sample scaffold pages/layouts to be retained; only the minimal maintained baseline is materialized, and sample Fieldnotes/about content must not survive into the product implementation.
- Kept durable Barlow Semi Condensed 500/600 availability as an execution-time stop condition rather than weakening `SPEC-VAL-002` with a substitute font or remote runtime dependency.

### Result

Ready for pass 2.

## 10. Review pass 2 — Consistency, traceability, source integrity, and risk

Cross-checked the corrected plan against `EVD-*` → `REQ-*` → `DES-*` → `SPEC-*` → `AC-*`, `SRC-REPO-001`, and the pinned adapter evidence. All must-have acceptance criteria map into `PLAN-001`–`PLAN-004`; proposed paths are distinguished from current repository files; architecture remains intentionally skipped; and no new product behavior, backend concern, browser-support promise, arbitrary breakpoint, or deployment requirement was introduced.

### Corrections

- Verified the maintained validation contract uses npm/lockfile, Astro/type checking, production build, Playwright Chromium, axe-core, and the exact `tests/site.spec.ts` convention. The plan now names those evidence-backed commands/paths rather than an invented equivalent.
- Verified binary design assets are an implementation prerequisite, not a planning assumption: if current Figma exports or an authoritative redistributable font source cannot be transferred into repository-controlled files, affected fidelity acceptance criteria remain unpassed and implementation must stop for resolution rather than silently falling back.
- Rechecked scope containment: the command bridge, workflow record/projections, project configuration, and unrelated repository-level state are preserved; application work stays inside the configured implementation root except the explicitly planned validation workflow.

### Readiness

**Ready for implementation with documented execution-time stop conditions.** The remaining risks are not unresolved product decisions: reverify the time-bound Figma source immediately before code work; capture expiring design assets while available; obtain/load repository-controlled Barlow Semi Condensed 500/600; and choose responsive transition values from browser fit evidence. Failure of any required asset/font/source verification blocks the affected acceptance criteria rather than authorizing a deviation.

## 11. Implementation narrative

This section remains narrative in CLI-managed mode. Do not duplicate record-owned task status, structured validation state, output snapshot identity, output commit, or lineage.

### Files and behavior

- Files created/modified/deleted: scaffolded the maintained Astro + TypeScript application; added the testimonial page, reusable testimonial-card component, CSS tokens/responsive layout, five durable avatar assets, the durable quotation-mark SVG, self-hosted Barlow Semi Condensed 500/600 plus OFL license, npm lockfile, Playwright/axe validation suite, and repository UI-validation workflow. The temporary dependency-materialization workflow removed itself after committing the lockfile and local fonts.
- Behavior implemented: one static five-card testimonial collection preserving Daniel → Jonathan → Jeanette → Patrick → Kira document order and source copy, with the authorized Desktop/Tablet/Mobile compositions, fluid transition behavior, no invented interaction, semantic page structure, decorative/redundant image treatment, and repository-local runtime assets/fonts.

### Implementation discoveries

| Discovery | Impact | Owning artifact/section | Required update |
|---|---|---|---|
| Reverification immediately before implementation found no material change in the authorized Figma Desktop `2001:1882`, Tablet `2012:730`, or Mobile `2012:1466` evidence. | Approved scope and task remain valid. | Source baseline / Stage 10 implementation | No rebaseline required. |
| The exact 1114px Desktop geometry resolves to four effective tracks of 255px, 253px, 255px, and 255px with 32px gaps; equal fractional tracks round Daniel to 541px instead of the evidenced 540px. | Fixed the desktop grid to the source-derived pixel geometry while retaining responsive behavior outside the reference width. | Responsive implementation / `SPEC-BEH-002` | Recorded in implementation CSS and browser validation. |
| Automated accessibility validation requires a page-level level-one heading even though no visible collection heading is present in Figma. | Added a visually-hidden `Graduate testimonials` h1 and labelled the collection from it; visible composition is unchanged. | Accessibility implementation / `SPEC-ACC-*` | Recorded as semantic implementation detail, not a visual design change. |
| Original Figma avatar source files were materially larger than their 28–32px presentation size. | Committed exact rendered avatar-node assets rather than oversized temporary originals; no Figma runtime URL remains. | Asset implementation / `REQ-CON-001` | Durable repository assets verified by Playwright. |

### Deviations

| Planned approach/baseline | Actual approach/baseline | Reason | Approval/evidence | Impact |
|---|---|---|---|---|
| Use the maintained Astro + TypeScript scaffold and preserve Figma visual evidence without adding React/Tailwind. | Implemented Astro + TypeScript with authored CSS; no React or Tailwind dependency was added. | Matches repository adapter and source scope. | Approved `P01-T01`; pinned adapter evidence. | None. |
| Select responsive transitions from browser fit evidence rather than treating Figma frame widths as breakpoints. | Selected 660px and 1234px transitions and validated 320, 659, 660, 1233, 1234, and 1600px in addition to 375, 768, and 1440px. | Maintains readable composition/no-overflow between and outside reference widths. | `AUD-001`, `DES-RWD-005`, passing Playwright evidence. | Non-blocking implementation choice within approved scope. |
| Preserve source copy exactly. | Preserved source strings, including `developent experience` and source quotation/spacing inconsistencies. | Copy correction was not authorized. | `REQ-BR-001`, approved scope. | None. |

### Remaining risks and documentation updates

- Risks: no blocking implementation risk remains. Production deployment/runtime evidence is not applicable because no deployment provider or production URL is configured. The Figma source remains time-bound for future changes, but it was reverified immediately before this implementation.
- Documentation updated: this implementation narrative records the source-integrity result, durable-asset/font materialization, responsive geometry discovery, accessibility semantic addition, implementation-selected transitions, and validation evidence. Structured task/validation/output status remains owned by the canonical workflow record.

## 13. Final implementation review

- **Exact design inputs reviewed:** Authorized Figma page `20:2` (`🤖 Testimonials grid section`) with Desktop `2001:1882`, Tablet `2012:730`, Mobile `2012:1466`, Style Guide `6018:261`, and scoped variables. The time-bound design source was reverified immediately before implementation with no material change.
- **Exact repository output reviewed:** Canonical implementation output `SRC-REPO-003` at immutable commit `89c4da2a32be602211246d246bd733073d223066`.
- **Validation runtime when applicable:** No deployment/production runtime is configured, so runtime evidence is not applicable. Exact-output repository validation is GitHub Actions run `35136981181` with artifact `ui-validation-35136981181` (artifact ID `10463690871`).
- **Requirements/acceptance result:** `P01-T01` is Complete; all five required validation checks are Passed and bound to the exact implementation output. Astro/TypeScript checks reported 0 errors, 0 warnings, and 0 hints; production build passed; all six Playwright browser tests passed; axe reported no violations; required reference and transition widths passed without horizontal overflow/content loss; durable local assets/fonts and evidenced visual tokens passed.
- **Remaining deviations/risks:** No blocking implementation finding remains. Thirteen temporary repository branches created during connector mistakes remain as repository-hygiene residue because the available connector does not expose branch deletion. They do not participate in the implementation output, PR lineage, or validated application tree. The latest PR bookkeeping push also shows an `action_required` workflow entry because it was bot-authored; the exact implementation output validation is green and the prior PR-head validation succeeded.
- **Baseline/lineage integrity:** Stage 11 reverified `SRC-REPO-003`. Commit `89c4da2a32be602211246d246bd733073d223066` remains the merge base of all subsequent working-branch commits; post-output changes are workflow bookkeeping/final-review narrative only and do not modify implementation files.
- **Human acceptance:** Project owner `ferfalcon` explicitly replied “I accept” in ChatGPT on 2026-09-16 after the final review evidence and non-blocking repository-hygiene deviation were disclosed. This acceptance does not authorize automatic PR merge or production publication.

| Finding ID | Expected | Actual | Severity | Correction | Status | Retest evidence |
|---|---|---|---|---|---|---|
| `IMPL-001` | Desktop Daniel card geometry materially matches the 540px Figma evidence. | Initial browser validation measured 541px because equal fractional tracks rounded differently. | Low | Replaced equal fractional desktop tracks with source-derived track geometry. | Corrected | Exact-output run `35136981181`; all six Playwright tests passed and desktop geometry assertion passed. |
| `IMPL-002` | Page-level semantic structure satisfies automated accessibility checks without altering the visible composition. | Initial axe run required a level-one heading. | Medium | Added a visually-hidden `Graduate testimonials` `h1` and labelled the collection from it. | Corrected | Exact-output run `35136981181`; axe reported no violations. |
| `IMPL-003` | Workflow execution should not leave unrelated temporary refs. | Thirteen temporary branches created during connector mistakes still exist outside the implementation/PR lineage. | Low | No safe branch-delete action is exposed by the connected GitHub tool in this session; residue was disclosed before acceptance. | Accepted deviation | Stage 11 branch inspection; output/HEAD comparison confirms no implementation-file impact. |
| `IMPL-004` | PR validation should remain interpretable after workflow-only bookkeeping pushes. | Latest PR-head workflow entry is `action_required` because the push was authored by the workflow bot. | Low | No application correction required; exact-output and prior PR-head validations remain successful and authoritative. | Accepted deviation | Exact-output run `35136981181`; prior PR-head Validate UI run succeeded. |

### Final result

`Implementation accepted with documented non-blocking deviations`

## 14. Change and upgrade history

| Date | Change/rebaseline/profile decision | Reason | Affected IDs/sections | Result |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |
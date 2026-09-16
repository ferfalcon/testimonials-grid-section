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
| `DES-009` | The five avatars remain visually paired with their adjacent names. Because the text already identifies each person, treating the raster portraits as redundant/decorative for assistive technology is the preferred accessibility intent unless implementation inspection reveals distinct informational value. | `EVD-002`, `AUD-002`, `REQ-AR-002` | Recommended |
| `DES-010` | Use the design tokens evidenced in the scoped file as the visual source of truth; subscribed Material 3, Simple Design System, and iOS libraries do not define this result because no scoped component instances depend on them. | `EVD-006`–`EVD-011`, `AUD-005` | Observed |
| `DES-INT-001` | The testimonial cards are static content containers. No hover, pressed, selected, expanded, focus, drag, or navigation state is evidenced, so no interactive state should be introduced merely for visual effect. | `EVD-013`, `REQ-CON-002` | Observed |
| `DES-INT-002` | No motion or transition is evidenced. Responsive rearrangement is layout reflow rather than an animated interaction; reduced-motion behavior is therefore not material unless motion is later introduced. | `EVD-013`, `REQ-CON-002` | Observed |

#### Stage 3 review pass 1 — completeness and correctness

Covered information hierarchy, card anatomy, visual system, responsive transformations, long-content behavior, decorative artwork, assets/design-system context, accessibility intent, and the absence of interaction/motion. Removed raw CSS-style prescriptions and kept the document focused on visual and behavioral intent rather than repository structure.

#### Stage 3 review pass 2 — consistency, traceability, risks, and uncertainty

Each design decision traces to audit evidence and applicable requirements. Observed Desktop/Tablet/Mobile transformations are separated from the recommended interpolation rule for unsupplied widths. No exact breakpoint is presented as source truth. Accessibility recommendations for avatar redundancy and decorative quotation artwork are explicitly distinguished from Figma-proven behavior. No design decision expands the scope beyond a static Express-eligible result.

### Specification and acceptance criteria

| Specification ID | Observable behavior | Related requirement |
|---|---|---|
| `SPEC-BEH-001` | ... | `REQ-FR-001` |

- [ ] `AC-001` ...
- [ ] `AC-002` ...

## 7. Repository-aware implementation approach

- Existing files/patterns:
- Reusable components/utilities/tokens/tests:
- Existing versus proposed files:
- Proposed approach:
- Responsive implementation:
- Semantics/accessibility:
- State/error handling:
- Tests/manual checks:
- Risks/regressions:

## 8. Single implementation unit

- Task ID: `P01-T01`
- Objective:
- Upstream references:
- Prerequisites: None
- Included files/behavior:
- Excluded work:
- Ordered implementation steps:
- Required validation:
- Definition of Done:

## 9. Review pass 1 — Completeness and correctness

Review source identity/scope, eligibility, evidence coverage, requirements/design/spec/AC, repository assumptions, accessibility/responsive/states/errors/validation, unsupported claims, and missing decisions.

### Corrections

- ...

### Result

Ready for pass 2 / Blocked

## 10. Review pass 2 — Consistency, traceability, source integrity, and risk

Review ID/snapshot integrity, requirement → design → specification → acceptance → task traceability, contradictions/hidden assumptions, scope/upgrade triggers, repository compatibility/regression risk, and validation executability.

### Corrections

- ...

### Readiness

Ready for implementation / Ready with non-blocking risks / Blocked or must upgrade

## 11. Implementation narrative

This section remains narrative in CLI-managed mode. Do not duplicate record-owned task status, structured validation state, output snapshot identity, output commit, or lineage.

### Files and behavior

- Files created/modified/deleted:
- Behavior implemented:

### Implementation discoveries

| Discovery | Impact | Owning artifact/section | Required update |
|---|---|---|---|
| ... | ... | ... | ... |

### Deviations

| Planned approach/baseline | Actual approach/baseline | Reason | Approval/evidence | Impact |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

### Remaining risks and documentation updates

- Risks:
- Documentation updated:



## 13. Final implementation review

- Exact design inputs reviewed:
- Exact repository output reviewed:
- Validation runtime when applicable:
- Requirements/acceptance result:
- Remaining deviations/risks:
- Baseline/lineage integrity:

| Finding ID | Expected | Actual | Severity | Correction | Status | Retest evidence |
|---|---|---|---|---|---|---|
| `IMPL-001` | ... | ... | Critical / High / Medium / Low | ... | Open / Corrected / Accepted deviation | ... |

### Final result

Use exactly one:

- `Implementation accepted`
- `Implementation accepted with documented non-blocking deviations`
- `Implementation requires corrections`

## 14. Change and upgrade history

| Date | Change/rebaseline/profile decision | Reason | Affected IDs/sections | Result |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

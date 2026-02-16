## 2025-05-15 - [Portfolio Link Accessibility & Structural Repair]
**Learning:** Portfolio projects often suffer from fragmented click targets where the image and title are separate or improperly nested links. Wrapping both in a single, well-structured anchor tag significantly improves mobile usability and accessibility. Additionally, static portfolio templates can accumulate duplicate IDs and malformed head/script tags over time.
**Action:** Always wrap project visual assets and titles in a single `<a>` tag with `d-block` and `text-decoration-none`. Ensure all icon-only links have `aria-label`.

## 2025-05-15 - [Navigation & Keyboard Accessibility Enhancement]
**Learning:** Adding a "Skip to Content" link and proper ARIA state management for toggleable menus (aria-expanded, aria-controls) significantly improves the experience for keyboard and screen reader users. Large click targets that encompass both visual and descriptive elements are more intuitive for all users.
**Action:** Implement "Skip to Content" links targeting the main heading and ensure JS-driven menus correctly toggle ARIA attributes.

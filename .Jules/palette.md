## 2026-02-14 - HTML Structural Patterns
**Learning:** The project frequently uses invalid HTML structures such as closing `<h6>` with `</p>`, redundant `</img>` tags, and complex mis-nesting of `<a>` and `<span>` tags. These patterns can break screen reader navigation and lead to inconsistent click targets.
**Action:** When modifying portfolio or project pages, always verify tag matching and use semantic nesting. Ensure `<a>` tags wrap all related clickable elements (like icons and titles) to provide a single, accessible focus target.

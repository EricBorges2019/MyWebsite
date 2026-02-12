# Palette's Journal

## Critical UX/Accessibility Learnings

## 2025-05-15 - Improving Accessibility and Markup in Legacy Portfolio
**Learning:** Older or student-built portfolio templates often suffer from broken HTML nesting (e.g., links starting inside one element and ending outside another) which can confuse screen readers and cause unpredictable layout behavior. Icon-only navigation toggles and social links are frequently missing ARIA labels.
**Action:** Always check for improperly nested `<a>` tags when links wrap multiple elements. Ensure every icon-only interactive element has a clear `aria-label`. Verify that all project thumbnails have descriptive `alt` text rather than just using `title`.

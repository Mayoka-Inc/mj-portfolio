# MJ Website Agent Instructions

## Overview
MJ Website is a static, high-performance personal portfolio site. It focuses on clean typography, accessibility, and a minimalist design.

## Core Components
- `index.html`: The main structural entry point with comprehensive SEO and structured data (JSON-LD).
- `css/style.css`: Global styles using vanilla CSS.
- `js/main.js`: Lightweight JavaScript for scroll-reveal animations and form handling.
- `llms.txt`: Machine-readable description for AI agents.

## Coding Standards
- **Performance First**: Avoid heavy JS frameworks. Stick to vanilla JS and CSS for maximum speed.
- **Accessibility**: Maintain high contrast ratios and ensure all elements are keyboard navigable.
- **SEO**: Keep the `og:*` and `twitter:*` tags updated with current site metadata.
- **Animations**: Use `IntersectionObserver` for performant, scroll-triggered reveals.

## Form Handling
- The newsletter form uses a placeholder success message. Wire it up to a backend (e.g., Vercel Functions, Mailchimp) for production.

## Future Improvements
- [ ] Add a blog section with Markdown processing.
- [ ] Integrate a real newsletter service.
- [ ] Add dark/light mode toggle (though dark is default).
- [ ] Optimize images in `assets/` using WebP format.

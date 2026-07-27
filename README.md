# Max Dymnoff / Dymnoff Software Labs SAS Landing Page

A professional landing page for Max Dymnoff, working through Dymnoff Software Labs SAS, showcasing services, experience, and contact information.

## Project Structure

The project has been refactored following web development best practices with separated concerns:

```
Landing/
├── index.html          # Main HTML file
├── es|pt|ru/           # Pre-rendered localized landing pages
├── case-studies/       # Search-focused project case studies
├── services/           # Search-focused service pages
├── css/
│   └── styles.css      # All CSS styles and responsive design
├── js/
│   └── main.js         # JavaScript functionality and i18n
├── scripts/
│   └── generate-locales.mjs # Generates localized HTML and sitemap
├── assets/             # Images, icons, and media files
│   ├── ancestry.png
│   ├── apple-touch-icon.png
│   ├── banred.png
│   ├── clearme.png
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── ifit.webp
│   ├── og.png
│   └── surfcast.webp
└── README.md           # This file
```

## Features

- **Multi-language Support**: Pre-rendered English, Spanish, Portuguese, and Russian pages
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Integrated with FormSubmit for reliable form handling
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support

## Development

### Local Development

To run the project locally:

1. **Using Python (recommended):**
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Using Node.js:**
   ```bash
   npx serve .
   ```

3. **Using VS Code:**
   Install the "Live Server" extension and right-click on `index.html` to "Open with Live Server".

### File Structure Benefits

- **Maintainability**: Separated concerns make it easier to update specific aspects
- **Performance**: External CSS and JS files can be cached by browsers
- **Collaboration**: Different developers can work on different files simultaneously
- **Debugging**: Easier to identify and fix issues in specific files
- **Scalability**: Easy to add new features or modify existing ones

## Deployment

The project is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import the project and deploy
- **GitHub Pages**: Push to a repository and enable Pages
- **Traditional hosting**: Upload all files to your web server

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance

- Optimized images with appropriate formats (PNG, WebP)
- Minimal JavaScript with efficient event handling
- CSS variables for consistent theming
- Responsive images with lazy loading

## Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color scheme
- Focus indicators for interactive elements

## Internationalization

The site supports four crawlable language versions:
- **English (en)**: Default language
- **Spanish (es)**: Español
- **Portuguese (pt)**: Português
- **Russian (ru)**: Русский

The root page is the English and `x-default` version. Spanish, Portuguese, and Russian use `/es/`, `/pt/`, and `/ru/`. Every landing, case-study, and service page contains localized HTML, a self-referencing canonical URL, reciprocal `hreflang` links, and normal crawlable language links.

After changing shared landing content or translations, regenerate and verify the localized pages:

```bash
node scripts/generate-locales.mjs
node scripts/generate-locales.mjs --check
```

## Contact Form

The contact form is integrated with FormSubmit and includes:
- Honeypot protection against spam
- Form validation
- Multi-language error messages
- Success/error status display
- URL parameter pre-filling

## License

This project is proprietary and confidential. All rights reserved.

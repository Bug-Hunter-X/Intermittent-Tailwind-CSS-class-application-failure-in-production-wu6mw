The problem was due to an improper configuration of PurgeCSS in my `tailwind.config.js` file.  PurgeCSS was removing styles that were dynamically added to elements at runtime, hence the inconsistencies.  To fix this, I updated my `tailwind.config.js` file to properly include the components or content that generated these dynamic styles.

```javascript
// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js', // Ensure all JS files, including those with dynamic styles, are included
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  // ... rest of your config
}
```

By including all relevant files (including JavaScript files where the dynamic styles are generated), PurgeCSS can identify all used classes, preventing the removal of necessary styles during the production build.
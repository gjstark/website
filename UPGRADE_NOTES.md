# Dependency Upgrade Summary

This project has been updated from outdated dependencies to modern versions. Below is a summary of the major changes.

## Major Version Updates

### Core Dependencies
- **Node.js**: Now requires >= 18.0.0 (added to package.json engines)
- **React**: Upgraded from 16.8.6 → 18.3.1
- **Gatsby**: Upgraded from 4.25.7 → 5.13.7
- **Bootstrap**: Upgraded from 4.6.0 → 5.3.3
- **React Bootstrap**: Upgraded from 1.5.1 → 2.10.5

### Gatsby Plugins
All Gatsby plugins have been updated to v5+ versions compatible with Gatsby 5:
- `gatsby-plugin-image`: ^3.13.1 (NEW - replaces deprecated gatsby-image)
- `gatsby-plugin-react-helmet`: ^6.13.1
- `gatsby-plugin-sharp`: ^5.13.1
- `gatsby-plugin-sitemap`: ^6.13.1
- `gatsby-source-contentful`: ^8.13.2
- `gatsby-transformer-remark`: ^6.13.1
- `gatsby-transformer-sharp`: ^5.13.1

### Dev Dependencies
- **ESLint**: Upgraded from 5.16.0 → 8.57.1
- **Prettier**: Upgraded from 1.17.0 → 3.3.3
- **@babel/eslint-parser**: ^7.25.9 (replaces deprecated babel-eslint)
- **dotenv**: Upgraded from 8.0.0 → 16.4.5
- **gh-pages**: Upgraded from 2.0.1 → 6.2.0

### Removed Dependencies
- `gatsby-image` - Deprecated, replaced with `gatsby-plugin-image`
- `sharp` - No longer needs to be explicitly declared (managed by gatsby-plugin-sharp)
- `babel-eslint` - Deprecated, replaced with `@babel/eslint-parser`
- `yargs-parser` - No longer needed

## Code Changes

### Image Handling Migration
The deprecated `gatsby-image` package has been replaced with `gatsby-plugin-image`. This required updates to:

#### Components Updated:
1. **src/components/article-preview.js**
   - Changed from `Img` to `GatsbyImage` component
   - Added `getImage()` helper function usage

2. **src/components/hero.js**
   - Changed from `Img` to `GatsbyImage` component
   - Added `getImage()` helper function usage

3. **src/templates/blog-post.js**
   - Changed from `Img` to `GatsbyImage` component
   - Added `getImage()` helper function usage

4. **src/components/seo.js**
   - Updated to handle new `gatsbyImageData` format
   - Added `getSrc()` helper for extracting image URLs
   - Maintains backward compatibility with old format

#### GraphQL Queries Updated:
All GraphQL queries have been updated to use `gatsbyImageData` instead of `fluid`:

1. **src/templates/blog-post.js**
   - Changed from `fluid(...)` with `GatsbyContentfulFluid` fragment
   - Now uses `gatsbyImageData(width, placeholder, formats)`

2. **src/pages/index.js**
   - Updated blog post image queries
   - Updated person/author image queries

3. **src/pages/blog.js**
   - Updated blog post image queries

### Configuration Updates
- **gatsby-config.js**: Added `gatsby-plugin-image` to plugins array
- **package.json**: Updated `fix-semi` script to use `@babel/eslint-parser`

## Next Steps

1. **Delete old lock files and node_modules:**
   ```bash
   rm -rf node_modules yarn.lock package-lock.json
   ```

2. **Install updated dependencies:**
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. **Test the build:**
   ```bash
   npm run build
   ```

4. **Test development server:**
   ```bash
   npm run develop
   ```

## Breaking Changes to Be Aware Of

### React 18
- React 18 introduces automatic batching and concurrent features
- If you have custom React code, test thoroughly
- The `react-helmet` package still works but consider migrating to `react-helmet-async` in the future

### Bootstrap 5
- Bootstrap 5 has breaking changes from v4
- jQuery is no longer required
- Popper.js v2 is now used
- Some class names have changed
- Review Bootstrap 5 migration guide if you use Bootstrap components directly

### Gatsby 5
- Improved performance and smaller bundle sizes
- Better TypeScript support
- Updated GraphQL schema

### gatsby-plugin-image
- More performant than gatsby-image
- Better lazy loading
- Smaller JavaScript bundle
- Different API (GatsbyImage vs Img component)

## Potential Issues

1. **Bootstrap 5 Breaking Changes**: If you're using Bootstrap classes or components directly in your code, some may need updating due to Bootstrap 4 → 5 changes.

2. **React Bootstrap 2.x**: The React Bootstrap upgrade to 2.x may have breaking changes in component APIs.

3. **Environment Variables**: Ensure your `.env` files are properly configured with Contentful credentials.

## Resources

- [Gatsby 5 Release Notes](https://www.gatsbyjs.com/docs/reference/release-notes/v5.0/)
- [Migrating to gatsby-plugin-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/)
- [Bootstrap 5 Migration Guide](https://getbootstrap.com/docs/5.3/migration/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)


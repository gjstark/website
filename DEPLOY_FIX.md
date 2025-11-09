# Netlify Deployment Fix

## Problem
The Netlify build was failing with the error:
```
npm error notarget No matching version found for contentful-import@^8.7.11
```

## Solution Applied

### 1. Fixed Package Versions
Updated `package.json` with correct versions:
- ✅ `contentful-import`: ^8.7.11 → **^9.4.127** (correct latest version)
- ✅ `contentful-export`: ^7.19.95 → **^7.21.98** (correct latest version)
- ✅ Added missing `gatsby-plugin-google-analytics`: **^5.13.1** (was in config but not installed)

### 2. Added `.npmrc` Configuration
Created `.npmrc` file with:
```
legacy-peer-deps=true
```
This handles peer dependency conflicts between Gatsby 5 and React 18 during the build process.

### 3. Added `.nvmrc` File
Created `.nvmrc` specifying Node.js 18, which Netlify will automatically detect and use.

## Files Changed
- ✅ `package.json` - Updated contentful package versions
- ✅ `.npmrc` - Created to handle peer dependencies
- ✅ `.nvmrc` - Created to specify Node version
- ✅ `UPGRADE_NOTES.md` - Updated with correct versions and Netlify troubleshooting
- ✅ `DEPLOY_FIX.md` - This file

## Next Steps

### Commit and Push Changes
```bash
git add .
git commit -m "Fix: Update contentful packages and add Netlify build configuration"
git push origin master
```

### Deploy on Netlify
After pushing, Netlify should automatically trigger a new deploy. The build should now succeed!

### If Build Still Fails
1. **Clear Netlify Cache**:
   - Go to: Site Settings → Build & Deploy → Build Settings
   - Click: "Clear cache and retry deploy"

2. **Verify Environment Variables** are set in Netlify:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `CONTENTFUL_HOST` (optional)

3. **Check Build Logs** for any new errors and report them if needed.

## Verification
✅ Local installation tested and working
✅ All dependencies resolved successfully
✅ 1,771 packages installed without errors


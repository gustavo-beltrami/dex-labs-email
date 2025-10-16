# Asset Hosting Guide

For your email images (logo and banner) to display correctly in customer inboxes, they need to be hosted on a publicly accessible URL.

## Your Assets

Located in `/public`:
- `dex-logo-full-light.svg` - dex Labs logo
- `dex.svg` - Alternative logo
- `General Banner.png` - Hero banner image

## Hosting Options

### Option 1: Host on Your Website (Recommended)
Upload the assets to your dexlabs.io domain:

```
https://dexlabs.io/email-assets/dex-logo-full-light.svg
https://dexlabs.io/email-assets/general-banner.png
```

**Steps:**
1. Create an `email-assets` folder on your web server
2. Upload the files from `/public` to that folder
3. Update the URLs in `src/send.ts`

### Option 2: Use Resend's Asset Hosting
Resend can host your assets for you:

1. Go to [Resend Assets](https://resend.com/assets)
2. Upload your logo and banner
3. Copy the provided URLs
4. Update the URLs in `src/send.ts`

### Option 3: Use a CDN
Upload to a CDN like:
- **Cloudflare Images**
- **AWS S3 + CloudFront**
- **Cloudinary**
- **imgix**

## Updating the Email Template

Once your assets are hosted, update `src/send.ts`:

```typescript
sendAcquisitionEmail({
  to: 'customer@example.com',
  customerName: 'John Doe',
  logoUrl: 'https://dexlabs.io/email-assets/dex-logo-full-light.svg',
  bannerUrl: 'https://dexlabs.io/email-assets/general-banner.png',
  // ... other options
});
```

## Image Optimization Tips

### Banner Image
The `General Banner.png` is quite large (1.1MB). For faster email loading:

1. **Optimize the PNG:**
   ```bash
   # Using ImageOptim, TinyPNG, or similar
   # Target size: < 200KB
   ```

2. **Convert to WebP with PNG fallback** (if your CDN supports it)

3. **Recommended dimensions:** 1200px width max (emails typically display at 600px)

### Logo SVG
The SVG is already optimized. Make sure your hosting supports SVG MIME type (`image/svg+xml`).

## Testing

After hosting your assets:

1. **Test in the preview:**
   ```bash
   npm run dev
   ```

2. **Send a test email to yourself:**
   ```bash
   npm run send
   ```

3. **Check in multiple email clients:**
   - Gmail (web and mobile)
   - Outlook
   - Apple Mail
   - Your company email system

## Important Notes

- **HTTPS Required:** Use HTTPS URLs to avoid security warnings
- **CORS:** Ensure your server allows email clients to fetch images
- **Caching:** Set appropriate cache headers for better performance
- **Accessibility:** Always include alt text (already configured in template)

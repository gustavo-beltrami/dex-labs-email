# Company Email System

Professional email templates using React Email and Resend for institutional communications.

## Setup

### 1. Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your configuration:

```env
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxx

# Your verified domain email (must be verified in Resend)
FROM_EMAIL=notifications@yourdomain.com
FROM_NAME=Your Company Name
```

### 3. Verify Your Domain in Resend

Before sending emails, you need to:
1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain
3. Get your API key from the dashboard

## Usage

### Preview Emails

Run the development server to preview your email templates:

```bash
npm run dev
```

This will open a browser at `http://localhost:3000` where you can see and interact with your email templates.

### Send Acquisition Announcement Email

Edit `src/send.ts` and uncomment the example at the bottom, then customize it:

```typescript
sendAcquisitionEmail({
  to: 'customer@example.com',
  customerName: 'John Doe',
  companyName: 'Your Company',
  acquiringCompanyName: 'Acquiring Company',
  logoUrl: 'https://yourdomain.com/logo.png',
  effectiveDate: 'January 1, 2025',
  supportEmail: 'support@yourcompany.com',
  actionUrl: 'https://yourcompany.com/acquisition-info',
});
```

Then run:

```bash
npm run send
```

### Send to Multiple Recipients

You can pass an array of email addresses:

```typescript
sendAcquisitionEmail({
  to: ['customer1@example.com', 'customer2@example.com'],
  // ... other options
});
```

## Email Template Customization

The acquisition announcement template is located at:
- `emails/acquisition-announcement.tsx`

You can customize:
- Text content and messaging
- Colors and styling (see the style objects at the bottom of the file)
- Layout and structure
- Add your brand assets (logo, colors, fonts)

## Project Structure

```
.
├── emails/                    # Email templates
│   └── acquisition-announcement.tsx
├── src/                       # Source code
│   └── send.ts               # Email sending logic
├── .env                      # Environment variables (create this)
├── .env.example             # Environment variables template
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Tips for Institutional Emails

1. **Test First**: Always send test emails to yourself before sending to customers
2. **Personalization**: Use customer names and specific details
3. **Clear Subject Lines**: Make the purpose immediately clear
4. **Professional Tone**: Maintain a formal yet approachable tone
5. **Call to Action**: Provide clear next steps
6. **Contact Information**: Always include support contact details
7. **Compliance**: Ensure you follow email regulations (CAN-SPAM, GDPR, etc.)

## Next Steps

1. Add your brand assets (logo, colors, fonts) to the email template
2. Customize the content to match your acquisition announcement
3. Set up your `.env` file with Resend credentials
4. Preview the email using `npm run dev`
5. Send test emails to verify everything works
6. Send to your customer list

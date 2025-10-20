# dex Labs Email System - Project Diary

## Project Overview
**Purpose**: Institutional email system for dex Labs using React Email and Resend API
**Repository**: https://github.com/gustavo-beltrami/dex-labs-email
**Status**: Active Development

---

## Session 1 - Initial Setup & Acquisition Announcement Email
**Date**: October 16, 2025

### Project Objectives
- Create professional email templates for dex Labs institutional communications
- First use case: Announce company acquisition to customers
- Establish reusable infrastructure for future email campaigns

### Technical Stack Decisions
- **Email Framework**: React Email (component-based email templates)
- **Email Service Provider**: Resend API
- **Language**: TypeScript
- **Asset Hosting**: GitHub public repository (for reliable CDN-like access to email assets)

### Brand Identity & Design Standards
Established the following brand guidelines for all email templates:

- **Primary Brand Color**: `#4338ca` (indigo blue)
- **Typography**: Inter font family
- **Background**: White (`#ffffff`)
- **Visual Elements**:
  - Logo: Hosted on GitHub
  - Hero banners: 12px border-radius for modern, friendly appearance
  - Clean, minimal design aesthetic

### Implementation Details

#### 1. Project Setup
- Initialized React Email project with TypeScript support
- Configured Resend API integration
- Created `.env` file structure for API key management
- Added `.env.example` for team documentation

**Package Dependencies**:
```json
{
  "@react-email/components": "^0.0.30",
  "react-email": "^3.0.3",
  "resend": "^4.0.1"
}
```

#### 2. Asset Hosting Strategy
**Decision**: Use GitHub public repository for hosting email assets instead of traditional CDN

**Rationale**:
- Email clients require publicly accessible URLs for images
- GitHub provides reliable, fast access to repository files
- Eliminates need for separate CDN setup
- Version control for assets alongside code

**GitHub Repository**: https://github.com/gustavo-beltrami/dex-labs-email

**Assets Created**:
- Logo image (dex Labs branding)
- Hero banner with rounded corners (12px border-radius)

**Documentation**: Created `ASSET_HOSTING.md` explaining the GitHub hosting approach

#### 3. Acquisition Announcement Email Template

**Template Name**: `dex-acquisition-announcement.tsx`
**Location**: `/Users/G.Beltrami/Documents/Projects/9.react-email/emails/dex-acquisition-announcement.tsx`

**Content Structure**:
1. **Header Section**:
   - dex Labs logo
   - Centered, professional appearance

2. **Hero Section**:
   - Large hero banner image with rounded corners
   - Visual impact for important announcement

3. **Title**:
   - "Important Update About dex"
   - Sets appropriate tone for acquisition news

4. **Content Sections**:
   - **What This Means**: Explains acquisition without naming acquiring company (per business requirement)
   - **Timeline for Transition**: Details two-phase support plan
   - **Next Steps**: Clear call-to-action for users
   - **Thank You**: Gracious closing acknowledging customer loyalty

**Support Timeline Implemented**:
- **Phase 1**: 30 days of full platform support (all features functional)
- **Phase 2**: Platform remains accessible but no new features until February 1, 2026
- **Final Date**: February 1, 2026 - platform shutdown

**Design Details**:
- Responsive layout using React Email components
- Clean section spacing with HR dividers
- Professional color scheme matching brand identity
- Mobile-friendly structure

#### 4. Email Sending Infrastructure

**Script**: `/Users/G.Beltrami/Documents/Projects/9.react-email/src/send-acquisition-email.ts`

**Functionality**:
- Renders React Email template to HTML
- Sends via Resend API
- Configurable recipient, subject, from address
- Error handling and success confirmation

**Test Results**: Successfully sent test emails confirming:
- Template renders correctly in email clients
- Images load properly from GitHub hosting
- Layout is responsive and professional
- All content sections display as intended

### Key Design Decisions & Protocols

#### Why GitHub for Asset Hosting?
Traditional approach would use a CDN, but GitHub offers:
- Zero additional infrastructure
- Built-in version control
- Free, reliable hosting
- Fast global access
- Simple team workflow

#### Why Not Name the Acquiring Company?
Business decision to keep announcement focused on dex Labs and customer impact rather than new ownership details. This allows the message to center on user experience and transition timeline.

#### Email Template Structure Pattern
Established reusable pattern for future emails:
1. Logo header
2. Hero image (optional, for important announcements)
3. Clear title
4. Content sections with descriptive headings
5. Call-to-action
6. Gracious closing

This structure can be adapted for:
- Feature announcements
- Service updates
- Onboarding sequences
- Transactional emails

### Design Iterations & Refinements

Throughout the session, several design improvements were made based on feedback:

1. **Hero Section Evolution**:
   - Initial version: Simple logo header
   - Final version: Full hero banner with "Announcement" tagline and large heading
   - Rationale: Creates immediate visual impact for important company announcement

2. **Content Refinement**:
   - Removed specific platform recommendations (Fivetran, Airbyte)
   - Focus shifted to upcoming migration documentation
   - Why: Allows company to provide tailored recommendations later based on each customer's needs

3. **Profile Signature Component**:
   - Added founder photo (48px circular avatar)
   - Professional signature layout with name and title
   - Why: Personal touch from leadership for sensitive announcement

4. **Support Timeline Clarity**:
   - Highlighted support phases in visual callout box
   - Clear dates and expectations
   - 30 days full support → platform-only until Feb 1, 2026

### Production Deployment

**Status**: PRODUCTION READY

**Email Template**: `/Users/G.Beltrami/Documents/Projects/9.react-email/emails/acquisition-announcement.tsx`

**Testing Completed**:
- Test emails sent to team members
- Rendering verified across email clients
- All GitHub-hosted assets loading correctly
- Layout responsive and professional
- Content reviewed and approved

**Assets**:
- Logo: `dex-logo-full-light.svg` (hosted on GitHub)
- Hero Banner: `General Banner.png` (hosted on GitHub, 12px rounded corners)
- Profile Photo: `gustavo_beltrami_profile_pic.jpg` (hosted on GitHub)

**GitHub Repository**: https://github.com/gustavo-beltrami/dex-labs-email

**Ready for**: Customer list announcement (awaiting user's send timing)

### Current State

**What Works**:
- Complete acquisition announcement email template
- Functional email sending infrastructure
- Asset hosting via GitHub
- React Email + Resend integration
- TypeScript type safety throughout
- Modern hero layout with announcement tagline
- Professional profile signature component
- Clear support timeline communication

**Template Features**:
- Responsive design for all devices
- Brand-consistent styling (#4338ca primary color)
- Inter font family throughout
- Clean section hierarchy with HR dividers
- Professional footer with contact information
- Props-based customization (customer name, dates, URLs)

**Testing Status**: Production-ready, test emails verified

### Project Structure
```
/Users/G.Beltrami/Documents/Projects/9.react-email/
├── emails/
│   └── acquisition-announcement.tsx         # Main email template (production-ready)
├── src/
│   └── send-acquisition-email.ts           # Sending script
├── public/
│   ├── dex-logo-full-light.svg             # Logo asset
│   ├── General Banner.png                   # Hero banner
│   └── gustavo_beltrami_profile_pic.jpg    # Profile photo
├── .env                                     # Resend API key (gitignored)
├── .env.example                            # Environment template
├── ASSET_HOSTING.md                        # Asset hosting documentation
├── README.md                               # Project documentation
├── PROJECT_DIARY.md                        # This file
├── package.json                            # Dependencies
└── tsconfig.json                           # TypeScript config
```

### Immediate Next Steps (User Actions)
1. **Send acquisition announcement** to customer list
2. **Monitor customer responses** and support requests
3. **Prepare migration documentation** as promised in email
4. **Individual customer outreach** for personalized migration support

### Future Enhancements (Not Yet Implemented)
Potential improvements for the email system:
- Additional email templates for other use cases
- Email template library/documentation
- A/B testing infrastructure
- Email analytics/open tracking integration
- Automated sending workflows
- Customer segmentation for targeted emails
- Template preview system for non-technical stakeholders

### Notes for Future Sessions

**Brand Standards**:
- Primary color: `#4338ca` (indigo blue)
- Typography: Inter font family
- Background: White (`#ffffff`)
- Hero elements: 12px border-radius for modern feel

**Technical Requirements**:
- All email assets must be publicly accessible (GitHub or CDN)
- Test emails in multiple clients before production sends
- Use props for customization rather than hardcoding values
- Maintain TypeScript type safety for template props

**Design Patterns Established**:
- Hero section with announcement tagline for important updates
- Profile signature component for personal touch from leadership
- Visual callout boxes for critical timeline information
- Clean section hierarchy with HR dividers

**Business Context**:
- Support ends February 1, 2026
- Full support for 30 days post-announcement
- Platform-only support after 30 days until shutdown
- Migration documentation to be provided in follow-up communications

---

## Session Summary

**Date**: October 16, 2025
**Duration**: Full work session
**Status**: Successfully completed, production-ready

**Major Accomplishments**:
1. Complete React Email + Resend system setup
2. Production-ready acquisition announcement email
3. GitHub asset hosting configuration
4. Modern hero layout implementation
5. Professional profile signature component
6. Successful test email verification
7. All code committed to version control

**Key Deliverable**: Production-ready email template ready for customer announcement

**User Next Step**: Send email to customer list when ready

---

## Session 2 - Customer List Finalization & Email Configuration
**Date**: October 16, 2025

### Session Objectives
- Finalize complete customer list for acquisition announcement
- Configure email reply-to and CC fields
- Update email preview text
- Prepare system for production send

### Customer List Updates

**Final Customer List**: 41 recipients across 9 companies

**Companies and Recipients**:
1. **dex Labs Team** (2):
   - matheus.beltrami@dexlabs.io
   - luan.guimaraes@dexlabs.io

2. **Hubii** (4):
   - financeiro@hubii.com.br
   - nelson@hubii.com.br
   - eduardo@hubii.com.br
   - leo.dabague@hubii.com.br

3. **Minimal Club** (6):
   - guilherme@minimalclub.com.br
   - ana.zuchi@minimalclub.com.br
   - feras@minimalclub.com.br
   - pedro@minimalclub.com.br
   - matheus.casas@minimalclub.com.br
   - lucas.innocentini@minimalclub.com.br

4. **MAHHP** (3):
   - alexandre.alves@mahhp.org
   - joao.costa@mahhp.org
   - paulo.akira@mahhp.org

5. **Caffeine Army** (5):
   - samuel.barbosa@caffeinearmy.com.br
   - antonio.ferreira@caffeinearmy.com.br
   - gustavo.chaves@caffeinearmy.com.br
   - haroldo.machado@caffeinearmy.com.br
   - mariaisabel.veloso@caffeinearmy.com.br

6. **Robbin** (7):
   - deX@robbin.dexlabs.io
   - tomas@robbin.com.br
   - rafael@robbin.com.br
   - andre@robbin.com.br
   - davi.fati@robbin.com.br
   - marcos@robbin.com.br
   - mateus@robbin.com.br

7. **Hoomy** (1):
   - rafael.lacerda@hoomy.com.br

8. **Moon Ventures** (2):
   - isabela.duarte@moonventures.com.br
   - isadora.veloso@moonventures.com.br

9. **Mombora** (1):
   - geovani@mombora.com.br

10. **Brick Seguros** (5):
    - carlos@brickseguros.com.br
    - lorenza@brickseguros.com.br
    - dex@brickseguros.dexlabs.io
    - vitor.soares@brick.so
    - paz@brick.so

11. **Insider Store** (2):
    - carol@insiderstore.com.br
    - yuri@insiderstore.com.br

12. **A2 Capital** (2):
    - takeo@a2capital.com.br
    - moyses@a2capital.com.br

13. **Linus** (1):
    - thiago.cordeiro@uselinus.com.br

**List Management**:
- Started with 24 recipients
- Added 17 additional contacts through iterative updates
- Removed all automation emails per user request
- Final count: 41 recipients

### Email Configuration Updates

**Email Headers Configured**:
- **From**: dex Labs <support@dexlabs.io>
- **Reply-To**: gustavo.beltrami@dexlabs.io
- **CC**: gustavo.beltrami@dexlabs.io (visible to all recipients)
- **Subject**: "An Important Update About dex"

**Preview Text Updated**:
- Changed from: "Important update about the future of dex"
- Changed to: "Today, we're announcing that dex has been acquired"
- This text appears in email client preview panes

### Technical Changes

**File: src/send.ts**
- Added reply-to field pointing to founder's email
- Added CC field to copy founder on all sends (visible to recipients)
- Maintained BCC initially, then changed to CC per user preference
- Customer list organized by company for clarity
- Total recipients: 41

**File: emails/acquisition-announcement.tsx**
- Updated preview text to match announcement tone
- No design changes - template remains production-ready

### Production Readiness

**Status**: READY TO SEND (awaiting user confirmation)

**Pre-Send Checklist**:
- ✅ Customer list finalized (41 recipients)
- ✅ Reply-to configured (gustavo.beltrami@dexlabs.io)
- ✅ CC configured for founder visibility
- ✅ Preview text updated
- ✅ Email template tested and verified
- ✅ All assets hosted and accessible
- ✅ Send function ready (commented out)

**To Send**: Uncomment lines 106-109 in src/send.ts and run `npm run send`

### Key Decisions

1. **CC vs BCC**: User chose CC over BCC so recipients can see founder is copied on communication - adds transparency and accountability

2. **Preview Text**: Updated to directly state acquisition announcement, setting proper expectations before email is opened

3. **Team Members in List**: Added dex Labs team members (Matheus, Luan) to customer list to ensure they receive the announcement

4. **Automation Emails Removed**: Excluded all automation/bot email addresses to ensure only human recipients receive the message

### Next Steps

**User Actions**:
1. Final review of email content and recipient list
2. Uncomment send function in src/send.ts
3. Execute send: `npm run send`
4. Monitor email delivery and responses
5. Begin individual customer outreach as promised

**Post-Send**:
- Track email open rates (if analytics enabled)
- Monitor support@dexlabs.io for customer responses
- Prepare migration documentation as mentioned in email
- Schedule individual calls with key customers

---

## Session 3 - Migration Documentation Email Campaign
**Date**: October 20, 2025

### Session Objectives
- Create migration documentation follow-up email template
- Send migration emails to all 41 customers individually
- Provide customers with comprehensive migration resources
- Address rate limiting issues during bulk send

### Migration Email Template

**Template Name**: `dex-migration-documentation.tsx`
**Location**: `/Users/G.Beltrami/Documents/Projects/9.react-email/emails/dex-migration-documentation.tsx`

**Purpose**: Follow-up email to acquisition announcement providing customers with detailed migration documentation and support resources.

**Content Structure**:
1. **Header Section**: dex Labs logo
2. **Greeting**: Personalized with customer name
3. **Introduction**: Reference to previous acquisition announcement
4. **Migration Documentation Link**: https://docs.dexlabs.io/migration/migrating-from-dex
5. **Timeline Reminder**:
   - November 15th: Current support ends
   - February 1st, 2026: Platform shutdown date
6. **Support Channels**:
   - Email: support@dexlabs.io
   - In-platform support widget
   - Slack/WhatsApp for existing customers
7. **Closing**: Appreciation and support commitment

### Email Sending Campaign

**Script**: `/Users/G.Beltrami/Documents/Projects/9.react-email/src/send-migration.ts`

**Initial Send Results**:
- Attempted to send to all 41 customers
- First batch: 28 emails sent successfully
- Rate limiting triggered after 28 sends
- Remaining 13 emails failed due to Resend API rate limit

**Rate Limiting Issue Discovered**:
- **Problem**: Resend API limits to 2 requests per second
- **Initial delay**: 100ms between sends (too fast - allowed 10 per second)
- **Symptom**: Error 429 (Too Many Requests) after ~28 emails
- **Root cause**: 100ms delay exceeded Resend's 2 requests/second limit

**Solution Implemented**:
- Increased delay from 100ms to 500ms
- 500ms delay = 2 requests per second maximum
- Aligns with Resend API rate limit specifications
- Added comment explaining rate limiting consideration

**Resend Results**:
- Successfully sent remaining 13 emails
- Total campaign: 41/41 emails delivered
- No further rate limiting issues

**Final Campaign Summary**:
- **Total Recipients**: 41 customers
- **Successful Sends**: 41/41 (100%)
- **First Attempt**: 28 emails
- **Second Attempt**: 13 emails (after rate limit fix)
- **Failed**: 0

### Email Configuration

**Headers** (same as acquisition email):
- **From**: dex Labs <support@dexlabs.io>
- **Reply-To**: gustavo.beltrami@dexlabs.io
- **CC**: gustavo.beltrami@dexlabs.io (visible to all recipients)
- **Subject**: "Migration Documentation for Your dex Workspace"

**Preview Text**: "We've prepared comprehensive migration guides to help you transition"

### Content Improvements Made During Session

1. **Specific Dates Added**:
   - Changed vague "in the coming weeks" to specific date: November 15th
   - Explicitly stated platform shutdown: February 1st, 2026
   - Provides clear timeline for customer planning

2. **Support Channels Expanded**:
   - Added email: support@dexlabs.io
   - Mentioned in-platform support widget
   - Noted Slack/WhatsApp availability for existing customers
   - Removed redundant "We're Here to Help" section that duplicated support info

3. **Formatting Refinements**:
   - Removed extra spacing between bullet points
   - Cleaner, more professional appearance
   - Better visual hierarchy

4. **Migration Documentation Link**:
   - Primary CTA: https://docs.dexlabs.io/migration/migrating-from-dex
   - Comprehensive guide covering all migration scenarios
   - Hosted on docs.dexlabs.io for easy access and updates

### Technical Implementation Details

**Individual Email Sending**:
```typescript
// Sends to each customer individually (not bulk)
for (const customer of customers) {
  await sendMigrationEmail({
    to: customer.email,
    customerName: customer.name,
  });

  // Rate limiting delay: 500ms = 2 requests/second max
  await new Promise(resolve => setTimeout(resolve, 500));
}
```

**Why Individual Sends vs. Bulk**:
- Personalization with customer names
- Better deliverability (not flagged as bulk mail)
- Individual tracking per recipient
- Professional appearance in inbox

### Key Decisions & Rationale

1. **Rate Limiting Strategy**:
   - **Decision**: 500ms delay between sends
   - **Why**: Resend API limits to 2 requests/second; 500ms ensures compliance
   - **Alternative considered**: Bulk send (rejected due to personalization needs)

2. **Specific Dates in Email**:
   - **Decision**: Include November 15th and February 1st, 2026 explicitly
   - **Why**: Removes ambiguity, helps customers plan migrations
   - **Previous**: Vague "coming weeks" language

3. **Support Channels Section**:
   - **Decision**: Consolidated all support options into one clear list
   - **Why**: Reduces redundancy, makes email more scannable
   - **Removed**: Separate "We're Here to Help" section that duplicated info

4. **Email Configuration Consistency**:
   - **Decision**: Use same reply-to/CC as acquisition email
   - **Why**: Maintains consistency, keeps founder in loop on responses
   - **Benefit**: Centralized communication thread for customer questions

### Production Results

**Status**: CAMPAIGN COMPLETED SUCCESSFULLY

**All Customers Notified**:
- All 41 emails delivered
- All customers have migration documentation link
- Support channels clearly communicated
- Timeline expectations set (November 15th, February 1st 2026)

**Email Delivery Stats**:
- Total recipients: 41
- Success rate: 100%
- Rate limit errors: 0 (after fix)
- Send duration: ~20.5 seconds (41 emails × 500ms delay)

### Current State

**Completed This Session**:
- Migration email template created
- Rate limiting issue identified and fixed
- All 41 customers received migration documentation
- Email content refined with specific dates
- Support channels clearly communicated
- Code committed and pushed to repository

**Customer Communication Status**:
1. **Acquisition Announcement**: Sent (Session 2)
2. **Migration Documentation**: Sent (Session 3)
3. **Next**: Individual customer support as needed

**Documentation Available to Customers**:
- Migration guide: https://docs.dexlabs.io/migration/migrating-from-dex
- Support email: support@dexlabs.io
- In-platform support widget
- Slack/WhatsApp for existing customers

### Project Structure Updates

```
/Users/G.Beltrami/Documents/Projects/9.react-email/
├── emails/
│   ├── acquisition-announcement.tsx         # Session 1 (production-ready)
│   └── dex-migration-documentation.tsx      # Session 3 (NEW - campaign completed)
├── src/
│   ├── send-acquisition-email.ts           # Session 1 sending script
│   └── send-migration.ts                   # Session 3 sending script (NEW)
├── public/
│   ├── dex-logo-full-light.svg
│   ├── General Banner.png
│   └── gustavo_beltrami_profile_pic.jpg
├── .env
├── .env.example
├── ASSET_HOSTING.md
├── README.md
├── PROJECT_DIARY.md                        # Updated this session
├── package.json
└── tsconfig.json
```

### Lessons Learned

**Rate Limiting**:
- Always check API provider rate limits before bulk operations
- 100ms delay is too aggressive for most email APIs
- Resend specifically limits to 2 requests/second
- Better to be conservative with delays (500ms) than risk failures mid-campaign

**Email Campaign Management**:
- Individual sends provide better personalization
- Track success/failure per recipient for troubleshooting
- Test with small batch first to identify issues
- Have resend capability for failed emails

**Content Clarity**:
- Specific dates > vague timeframes ("November 15th" vs "coming weeks")
- Consolidate redundant information
- Multiple support channels increase customer confidence
- Clear CTAs (migration documentation link)

### Notes for Future Sessions

**Customer Support Expectations**:
- Customers now have migration documentation
- Support team should monitor support@dexlabs.io for migration questions
- Founder CC'd on all email responses (gustavo.beltrami@dexlabs.io)
- Slack/WhatsApp available for existing customer urgent requests

**Timeline to Remember**:
- **November 15th**: Current support level ends
- **February 1st, 2026**: Platform shutdown date
- Time window for customer migrations: ~3.5 months from today

**Resend API Rate Limits**:
- Maximum: 2 requests per second
- Recommended delay: 500ms between sends
- Monitor for 429 errors in bulk operations

**Email Template Pattern Established**:
- Personalized greetings with customer names
- Clear documentation/resource links
- Specific dates and timelines
- Multiple support channel options
- Professional, concise formatting

---

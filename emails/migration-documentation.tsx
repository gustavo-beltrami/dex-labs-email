import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface MigrationDocumentationEmailProps {
  customerName?: string;
  companyName?: string;
  bannerUrl?: string;
  supportEmail?: string;
  migrationDocsUrl?: string;
}

export const MigrationDocumentationEmail = ({
  customerName = 'Valued Customer',
  companyName = 'dex Labs',
  bannerUrl = 'https://raw.githubusercontent.com/gustavo-beltrami/dex-labs-email/main/public/General%20Banner.png',
  supportEmail = 'support@dexlabs.io',
  migrationDocsUrl = 'https://docs.dexlabs.io/migration/migrating-from-dex',
}: MigrationDocumentationEmailProps) => {
  const previewText = "Your migration guide from dex is ready";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={heroSection}>
            {bannerUrl && (
              <Img
                src={bannerUrl}
                width="600"
                alt="dex Labs"
                style={banner}
              />
            )}
            <Section style={heroTextSection}>
              <Text style={categoryText}>
                Migration Guide
              </Text>
              <Heading
                as="h1"
                style={heroHeading}
              >
                Your dex Migration Documentation
              </Heading>
            </Section>
          </Section>

          <Section style={content}>
            <Text style={text}>Hi {customerName},</Text>

            <Text style={text}>
              Following our acquisition announcement, we're sharing the comprehensive migration documentation we promised to help you transition from dex.
            </Text>

            <Text style={text}>
              This guide covers everything from understanding your current setup to choosing and implementing your next data platform, with step-by-step instructions and best practices for a smooth transition.
            </Text>

            <Section style={buttonContainer}>
              <Button
                href={migrationDocsUrl}
                style={button}
              >
                View Migration Guide
              </Button>
            </Section>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Support Timeline
            </Heading>

            <Section style={highlightBox}>
              <Text style={highlightTextBody}>
                • <strong>Full Support until November 15th:</strong> Our team is available for all platform and technical issues, migration questions, and implementation guidance
                <br /><br />
                • <strong>November 16th - February 1st, 2026:</strong> Platform remains operational with platform-related support only
                <br /><br />
                • <strong>February 1st, 2026:</strong> Platform shutdown
              </Text>
            </Section>

            <Text style={text}>
              We recommend starting your migration planning as soon as possible to ensure a smooth transition before our full support period ends on November 15th.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              How to Get Support
            </Heading>

            <Text style={text}>
              Our team is here to help you through every step of your migration. You can reach us through any of the following channels:
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightTextBody}>
                • <strong>Email:</strong> {supportEmail}
                <br /><br />
                • <strong>In-Platform Support Widget:</strong> Available directly in your dex dashboard
                <br /><br />
                • <strong>Dedicated Support Channels:</strong> Slack and WhatsApp (if you have access)
              </Text>
            </Section>

            <Text style={text}>
              As mentioned in our previous email, our team will also be reaching out individually over the coming weeks to discuss your specific needs and answer any questions about your migration path.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Next Steps
            </Heading>

            <Text style={text}>
              We recommend reviewing the migration documentation as soon as possible to understand the scope of work and begin planning your transition timeline.
            </Text>

            <Text style={text}>
              Every migration is unique, and we're committed to making this transition as smooth as possible. Don't hesitate to reach out with questions—no question is too small.
            </Text>

            <Text style={text}>
              Thank you for being part of the dex journey.
            </Text>

            <Text style={signature}>
              <br />
              The dex Labs Team
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Questions? Contact us at{' '}
              <Link href={`mailto:${supportEmail}`} style={footerLink}>
                {supportEmail}
              </Link>
            </Text>
            <Text style={footerText}>
              © {new Date().getFullYear()} dex Labs. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default MigrationDocumentationEmail;

// Styles - dex Labs Brand (consistent with acquisition announcement)
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  marginBottom: '0',
  maxWidth: '600px',
};

const heroSection = {
  margin: '16px 0',
};

const banner = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  display: 'block',
  margin: '0',
  borderRadius: '12px',
  objectFit: 'cover' as const,
};

const heroTextSection = {
  marginTop: '32px',
  textAlign: 'center' as const,
  padding: '0 20px',
};

const categoryText = {
  margin: '16px 0',
  fontWeight: '600',
  fontSize: '18px',
  color: '#4338ca',
  lineHeight: '28px',
  fontFamily: 'Inter, sans-serif',
};

const heroHeading = {
  margin: '8px 0 0 0',
  fontWeight: '600',
  fontSize: '36px',
  color: '#1e1e24',
  lineHeight: '36px',
  fontFamily: 'Inter, sans-serif',
};

const content = {
  padding: '24px 20px 0',
};

const h2 = {
  color: '#1e1e24',
  fontSize: '22px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '32px 0 16px',
  fontFamily: 'Inter, sans-serif',
};

const text = {
  color: '#3a3a42',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 0',
  fontFamily: 'Inter, sans-serif',
};

const highlightBox = {
  backgroundColor: '#f5f5f7',
  borderLeft: '4px solid #4338ca',
  borderRadius: '4px',
  padding: '20px',
  margin: '24px 0',
};

const highlightText = {
  color: '#1e1e24',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
  fontFamily: 'Inter, sans-serif',
};

const highlightTextBody = {
  color: '#3a3a42',
  fontSize: '16px',
  lineHeight: '1.8',
  margin: '0',
  fontFamily: 'Inter, sans-serif',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#4338ca',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  fontFamily: 'Inter, sans-serif',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const link = {
  color: '#4338ca',
  textDecoration: 'underline',
};

const signature = {
  color: '#3a3a42',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0 0',
  fontFamily: 'Inter, sans-serif',
};

const footer = {
  padding: '0 20px',
  marginTop: '32px',
  paddingBottom: '32px',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '8px 0',
  textAlign: 'center' as const,
  fontFamily: 'Inter, sans-serif',
};

const footerLink = {
  color: '#4338ca',
  textDecoration: 'underline',
};

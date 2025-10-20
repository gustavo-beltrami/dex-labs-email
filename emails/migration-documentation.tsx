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
              This guide has been prepared with your transition in mind, covering everything from understanding your current setup to choosing and implementing your next data platform.
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
              What's Included in the Guide
            </Heading>

            <Text style={text}>
              The migration documentation covers:
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightTextBody}>
                • <strong>Understanding Your Current Setup:</strong> How to audit your existing dex pipelines and dependencies
                <br /><br />
                • <strong>Choosing Your Next Platform:</strong> Framework for evaluating alternative data platforms based on your needs
                <br /><br />
                • <strong>Migration Strategies:</strong> Step-by-step approaches for different migration scenarios
                <br /><br />
                • <strong>Timeline Planning:</strong> Recommended milestones and checkpoints for a smooth transition
                <br /><br />
                • <strong>Common Challenges:</strong> Known issues and how to address them during migration
                <br /><br />
                • <strong>Testing & Validation:</strong> Best practices for ensuring your new setup works correctly
              </Text>
            </Section>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              We're Here to Help
            </Heading>

            <Text style={text}>
              As mentioned in our previous email, our team will be reaching out individually over the coming weeks to discuss your specific needs and answer any questions.
            </Text>

            <Text style={text}>
              In the meantime, if you have urgent questions or need clarification on any part of the migration process, please don't hesitate to reach out.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightText}>
                <strong>Support Timeline Reminder:</strong>
              </Text>
              <Text style={highlightTextBody}>
                • <strong>Full Support:</strong> Available for the next 30 days for all platform and technical issues
                <br />
                • <strong>Platform Support:</strong> After 30 days until February 1st, 2026
                <br />
                • <strong>Platform Shutdown:</strong> February 1st, 2026
              </Text>
            </Section>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Questions?
            </Heading>

            <Text style={text}>
              We understand that every migration is unique, and you may have specific questions about your setup. We're committed to making this transition as smooth as possible.
            </Text>

            <Text style={text}>
              Feel free to reply to this email or reach out directly at{' '}
              <Link href={`mailto:${supportEmail}`} style={link}>
                {supportEmail}
              </Link>
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

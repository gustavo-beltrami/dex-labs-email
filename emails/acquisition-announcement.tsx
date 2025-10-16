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

interface AcquisitionAnnouncementEmailProps {
  customerName?: string;
  companyName?: string;
  acquiringCompanyName?: string;
  logoUrl?: string;
  bannerUrl?: string;
  effectiveDate?: string;
  supportEmail?: string;
  actionUrl?: string;
}

export const AcquisitionAnnouncementEmail = ({
  customerName = 'Valued Customer',
  companyName = 'dex Labs',
  acquiringCompanyName = 'Acquiring Company',
  logoUrl = 'https://raw.githubusercontent.com/gustavo-beltrami/dex-labs-email/main/public/dex-logo-full-light.svg',
  bannerUrl = 'https://raw.githubusercontent.com/gustavo-beltrami/dex-labs-email/main/public/General%20Banner.png',
  effectiveDate = 'January 1, 2025',
  supportEmail = 'support@dexlabs.io',
  actionUrl = 'https://dexlabs.io',
}: AcquisitionAnnouncementEmailProps) => {
  const previewText = `Important update: ${companyName} has been acquired by ${acquiringCompanyName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {bannerUrl && (
            <Section style={bannerSection}>
              <Img
                src={bannerUrl}
                width="600"
                alt="dex Labs"
                style={banner}
              />
            </Section>
          )}

          {logoUrl && (
            <Section style={logoSection}>
              <Img
                src={logoUrl}
                width="180"
                alt={companyName}
                style={logo}
              />
            </Section>
          )}

          <Section style={content}>
            <Heading style={h1}>An Important Update About {companyName}</Heading>

            <Text style={text}>Dear {customerName},</Text>

            <Text style={text}>
              We are writing to inform you of an important development. {companyName} has
              been acquired by {acquiringCompanyName}, effective {effectiveDate}.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightText}>
                <strong>What This Means for You:</strong>
              </Text>
            </Section>

            <Text style={text}>
              <strong>No Immediate Changes:</strong> Your services will continue uninterrupted.
              All existing agreements, pricing, and terms remain in effect.
            </Text>

            <Text style={text}>
              <strong>Enhanced Services:</strong> This acquisition will enable us to provide
              you with enhanced capabilities, improved support, and expanded services in the
              coming months.
            </Text>

            <Text style={text}>
              <strong>Your Data is Secure:</strong> We remain committed to protecting your
              data and privacy. All security measures and compliance certifications continue
              as before.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Next Steps
            </Heading>

            <Text style={text}>
              We will be reaching out over the coming weeks with more details about:
            </Text>

            <ul style={list}>
              <li style={listItem}>Platform integration timeline</li>
              <li style={listItem}>New features and capabilities</li>
              <li style={listItem}>Support and service updates</li>
              <li style={listItem}>Training and onboarding resources</li>
            </ul>

            <Text style={text}>
              In the meantime, please continue to use our services as normal. If you have
              any questions or concerns, please don't hesitate to reach out.
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href={actionUrl}>
                Learn More About This Change
              </Button>
            </Section>

            <Hr style={divider} />

            <Text style={text}>
              We are excited about this new chapter and the opportunities it brings for
              serving you better. Thank you for your continued trust and partnership.
            </Text>

            <Text style={signature}>
              Sincerely,
              <br />
              The {companyName} Team
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
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AcquisitionAnnouncementEmail;

// Styles - dex Labs Brand
const main = {
  backgroundColor: '#ffffff', // oklch(1 0 0) - pure white
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

const bannerSection = {
  padding: '0',
  margin: '0',
  width: '100%',
};

const banner = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  display: 'block',
  margin: '0',
};

const logoSection = {
  padding: '32px 20px 24px',
  textAlign: 'center' as const,
  backgroundColor: '#ffffff',
};

const logo = {
  margin: '0 auto',
  display: 'block',
};

const content = {
  padding: '0 48px',
};

const h1 = {
  color: '#1e1e24', // oklch(0.141 0.005 285.823) - dex Labs foreground
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '16px 0 24px',
  fontFamily: 'Inter, sans-serif',
};

const h2 = {
  color: '#1e1e24', // dex Labs foreground
  fontSize: '22px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '32px 0 16px',
  fontFamily: 'Inter, sans-serif',
};

const text = {
  color: '#3a3a42', // Slightly lighter variant for body text
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 0',
  fontFamily: 'Inter, sans-serif',
};

const highlightBox = {
  backgroundColor: '#f5f5f7',
  borderLeft: '4px solid #4338ca', // dex Labs brand color accent
  borderRadius: '4px',
  padding: '20px',
  margin: '24px 0',
};

const highlightText = {
  color: '#1e1e24',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  fontFamily: 'Inter, sans-serif',
};

const list = {
  color: '#3a3a42',
  fontSize: '16px',
  lineHeight: '1.6',
  marginLeft: '20px',
  marginTop: '8px',
  marginBottom: '16px',
  fontFamily: 'Inter, sans-serif',
};

const listItem = {
  marginBottom: '8px',
  color: '#3a3a42',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#4338ca', // oklch(42.48% 0.1295 259.18) - dex Labs brand color
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

const signature = {
  color: '#3a3a42',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
  fontStyle: 'italic' as const,
  fontFamily: 'Inter, sans-serif',
};

const footer = {
  padding: '0 48px',
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
  color: '#4338ca', // dex Labs brand color
  textDecoration: 'underline',
};

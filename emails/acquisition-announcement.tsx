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
  Row,
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
  profilePhotoUrl?: string;
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
  profilePhotoUrl = 'https://raw.githubusercontent.com/gustavo-beltrami/dex-labs-email/main/public/gustavo_beltrami_profile_pic.jpg',
  effectiveDate = 'January 1, 2025',
  supportEmail = 'support@dexlabs.io',
  actionUrl = 'https://dexlabs.io',
}: AcquisitionAnnouncementEmailProps) => {
  const previewText = 'Today, we're announcing that dex has been acquired';

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
                Announcement
              </Text>
              <Heading
                as="h1"
                style={heroHeading}
              >
                An Important Update About dex
              </Heading>
            </Section>
          </Section>

          <Section style={content}>
            <Text style={text}>Dear {customerName},</Text>

            <Text style={text}>
              Today, we're announcing that dex has been acquired. Our team will be joining a new company to help scale data infrastructure and accelerate AI-driven experiences for millions of users.
            </Text>

            <Text style={text}>
              When we started dex, our mission was to make modern data engineering accessible to every company. We built dex as an all-in-one platform that combined data collection, transformation, orchestration, and monitoring in a way that eliminated complexity and empowered teams to focus on building what makes their business special.
            </Text>

            <Text style={text}>
              Over the past years, dex has processed terabytes of data across hundreds of environments, helping teams reduce pipeline delivery time by 60-80%, eliminate platform maintenance overhead entirely, and achieve 4-8x cost savings compared to traditional approaches.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              What Will Happen to dex
            </Heading>

            <Text style={text}>
              The dex platform will continue to operate until <strong>February 1st, 2026</strong>, giving everyone time to plan and execute their transition.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightText}>
                <strong>Support Timeline:</strong>
              </Text>
              <Text style={highlightTextBody}>
                • <strong>Next 30 days:</strong> Full support for all platform and technical issues
                <br />
                • <strong>After 30 days until February 1st, 2026:</strong> Platform-related support only
                <br />
                • <strong>New sign-ups:</strong> Disabled starting today
                <br />
                • <strong>New connectors:</strong> Development suspended
              </Text>
            </Section>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              How to Transition from dex
            </Heading>

            <Text style={text}>
              We understand transitions take time and planning. We're committed to making this as smooth as possible for all our customers.
            </Text>

            <Text style={text}>
              <strong>We'll send additional documentation on migration and transition soon</strong> to help you plan your next steps. Our team will also be reaching out to each customer individually over the coming weeks to discuss your specific needs and help plan your migration path.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Thank You
            </Heading>

            <Text style={text}>
              To every team and data engineer who trusted dex: thank you.
            </Text>

            <Text style={text}>
              Building alongside you has been the greatest part of this journey. Watching you scale your companies, build incredible data products, and empower your teams with insights that drive real business impact—these stories have been our greatest reward.
            </Text>

            <Text style={text}>
              We're incredibly proud of what we built together.
            </Text>

            <Row>
              <Hr style={profileDivider} />
              <Section style={profileImageSection}>
                <Img
                  alt="Gustavo Beltrami"
                  style={profileImage}
                  height={48}
                  src={profilePhotoUrl}
                  width={48}
                />
              </Section>
              <Section style={profileInfoSection}>
                <Heading
                  as="h3"
                  style={profileName}
                >
                  Gustavo Beltrami
                </Heading>
                <Text style={profileTitle}>
                  Founder & CEO
                </Text>
              </Section>
            </Row>
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
  color: '#4338ca', // dex Labs brand color
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
  padding: '24px 20px 0',
};

const h1 = {
  color: '#1e1e24', // oklch(0.141 0.005 285.823) - dex Labs foreground
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '0',
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
  color: '#4338ca', // dex Labs brand color
  textDecoration: 'underline',
};

const profileDivider = {
  borderColor: '#e5e7eb',
  margin: '16px 0',
};

const profileImageSection = {
  display: 'inline-block',
  maxHeight: '48px',
  maxWidth: '48px',
  textAlign: 'left' as const,
  verticalAlign: 'middle' as const,
};

const profileImage = {
  display: 'block',
  height: '48px',
  width: '48px',
  borderRadius: '50%',
  objectFit: 'cover' as const,
  objectPosition: 'center' as const,
};

const profileInfoSection = {
  marginLeft: '18px',
  display: 'inline-block',
  maxWidth: '120px',
  textAlign: 'left' as const,
  verticalAlign: 'middle' as const,
};

const profileName = {
  margin: '0px',
  fontWeight: '500',
  fontSize: '14px',
  color: '#1e1e24',
  lineHeight: '20px',
  fontFamily: 'Inter, sans-serif',
};

const profileTitle = {
  margin: '0px',
  fontWeight: '500',
  fontSize: '12px',
  color: '#6b7280',
  lineHeight: '14px',
  fontFamily: 'Inter, sans-serif',
};

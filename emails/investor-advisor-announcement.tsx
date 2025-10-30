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

interface InvestorAdvisorAnnouncementEmailProps {
  recipientName?: string;
  bannerUrl?: string;
  profilePhotoUrl?: string;
  schedulingUrl?: string;
  shutdownDate?: string;
}

export const InvestorAdvisorAnnouncementEmail = ({
  recipientName = 'Valued Investor',
  bannerUrl = 'https://raw.githubusercontent.com/gustavo-beltrami/dex-labs-email/main/public/Nu_dex_acquistion_banner%20(1).svg',
  profilePhotoUrl = 'https://raw.githubusercontent.com/gustavo-beltrami/dex-labs-email/main/public/gustavo_beltrami_profile_pic.jpg',
  schedulingUrl = 'https://app.reclaim.ai/m/gustavo-beltrami/flexible',
  shutdownDate = 'November 15th, 2025',
}: InvestorAdvisorAnnouncementEmailProps) => {
  const previewText = "CONFIDENTIAL: dex Labs has been acquired by Nubank";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Confidentiality Banner */}
          <Section style={confidentialityBanner}>
            <Text style={confidentialityText}>
              🔒 STRICTLY CONFIDENTIAL - DO NOT SHARE
            </Text>
          </Section>

          {/* Hero Section with Nubank/dex Banner */}
          <Section style={heroSection}>
            {bannerUrl && (
              <Img
                src={bannerUrl}
                width="600"
                alt="Nubank acquires dex"
                style={banner}
              />
            )}
          </Section>

          <Section style={content}>
            <Text style={text}>Dear {recipientName},</Text>

            <Text style={text}>
              I am writing to inform you that <strong>dex Labs has been acquired by Nubank</strong>. This marks a significant milestone in our journey, and I wanted to share this news with you personally before making any broader announcements.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Transaction Overview
            </Heading>

            <Text style={text}>
              After careful consideration and extensive discussions, our team has joined Nubank to help scale their data infrastructure capabilities and accelerate AI-driven experiences for millions of customers across Latin America.
            </Text>

            <Text style={text}>
              This acquisition represents a strategic alignment between dex's technical expertise in modern data engineering and Nubank's mission to democratize financial services.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Operations Timeline
            </Heading>

            <Text style={text}>
              As part of this transition, <strong>dex operations will be shut down on {shutdownDate}</strong>. This timeline allows our team to ensure a smooth handover of customer support responsibilities and orderly wind-down of the platform.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightText}>
                <strong>Key Date:</strong>
              </Text>
              <Text style={highlightTextBody}>
                • <strong>{shutdownDate}:</strong> Complete shutdown of dex platform operations
                <br />
                • <strong>Customer Support:</strong> Active through shutdown date to ensure smooth customer transitions
                <br />
                • <strong>Team Transition:</strong> Core team members joining Nubank immediately following close
              </Text>
            </Section>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Deal Terms Discussion
            </Heading>

            <Text style={text}>
              I understand you may have questions about the terms of this transaction and what it means for your investment. I am available to discuss the details with you at your convenience.
            </Text>

            <Text style={text}>
              <strong>Please feel free to schedule a call with me at any time using this link:</strong>
            </Text>

            <Section style={buttonContainer}>
              <Button href={schedulingUrl} style={button}>
                Schedule a Call with Gustavo
              </Button>
            </Section>

            <Text style={text}>
              I'm happy to walk through the specifics of the deal structure, valuation, and what this means for you as an investor/advisor to dex Labs.
            </Text>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Confidentiality Notice
            </Heading>

            <Section style={warningBox}>
              <Text style={warningText}>
                ⚠️ <strong>This information is strictly confidential and may not be shared, distributed, or disclosed to any third parties without prior written consent.</strong>
              </Text>
              <Text style={warningTextBody}>
                The details of this acquisition, including the acquiring company, transaction terms, and timeline, are subject to confidentiality obligations. Please maintain strict confidentiality regarding all information contained in this communication.
              </Text>
            </Section>

            <Hr style={divider} />

            <Heading as="h2" style={h2}>
              Thank You
            </Heading>

            <Text style={text}>
              Your support, guidance, and belief in dex Labs has been instrumental to everything we've accomplished. This outcome would not have been possible without your partnership and trust along the way.
            </Text>

            <Text style={text}>
              I look forward to connecting with you personally to discuss this news in greater detail.
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
                  Founder & CEO, dex Labs
                </Text>
              </Section>
            </Row>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Direct Contact:{' '}
              <Link href="mailto:gustavo.beltrami@dexlabs.io" style={footerLink}>
                gustavo.beltrami@dexlabs.io
              </Link>
            </Text>
            <Text style={footerText}>
              Schedule a Call:{' '}
              <Link href={schedulingUrl} style={footerLink}>
                Book Time Here
              </Link>
            </Text>
            <Text style={footerTextSmall}>
              © {new Date().getFullYear()} dex Labs. All rights reserved. | Confidential Communication
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default InvestorAdvisorAnnouncementEmail;

// Styles - dex Labs Brand with Confidential Additions
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

const confidentialityBanner = {
  backgroundColor: '#dc2626', // Red for confidentiality
  padding: '12px 20px',
  textAlign: 'center' as const,
};

const confidentialityText = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  margin: '0',
  letterSpacing: '0.5px',
  fontFamily: 'Inter, sans-serif',
};

const heroSection = {
  margin: '0',
  marginTop: '24px',
  padding: '0',
};

const banner = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  display: 'block',
  margin: '0',
  objectFit: 'cover' as const,
};

const content = {
  padding: '32px 20px 0',
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

const warningBox = {
  backgroundColor: '#fef2f2', // Light red background
  borderLeft: '4px solid #dc2626', // Red accent
  borderRadius: '4px',
  padding: '20px',
  margin: '24px 0',
};

const warningText = {
  color: '#991b1b', // Dark red
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
  fontFamily: 'Inter, sans-serif',
};

const warningTextBody = {
  color: '#7f1d1d', // Darker red
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0',
  fontFamily: 'Inter, sans-serif',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '24px 0',
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

const footer = {
  padding: '0 20px',
  marginTop: '32px',
  paddingBottom: '32px',
  borderTop: '1px solid #e5e7eb',
  paddingTop: '24px',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '8px 0',
  textAlign: 'center' as const,
  fontFamily: 'Inter, sans-serif',
};

const footerTextSmall = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '12px 0 0',
  textAlign: 'center' as const,
  fontFamily: 'Inter, sans-serif',
};

const footerLink = {
  color: '#4338ca',
  textDecoration: 'underline',
};

const profileDivider = {
  borderColor: '#e5e7eb',
  margin: '32px 0 16px',
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
  maxWidth: '160px',
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

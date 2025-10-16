import 'dotenv/config';
import { Resend } from 'resend';
import { AcquisitionAnnouncementEmail } from '../emails/acquisition-announcement';

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailOptions {
  to: string | string[];
  customerName?: string;
  companyName?: string;
  acquiringCompanyName?: string;
  logoUrl?: string;
  bannerUrl?: string;
  effectiveDate?: string;
  supportEmail?: string;
  actionUrl?: string;
}

export async function sendAcquisitionEmail({
  to,
  customerName,
  companyName = process.env.FROM_NAME || 'dex Labs',
  acquiringCompanyName = 'Acquiring Company',
  logoUrl,
  bannerUrl,
  effectiveDate = 'January 1, 2025',
  supportEmail = process.env.FROM_EMAIL || 'support@dexlabs.io',
  actionUrl = 'https://dexlabs.io',
}: SendEmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: Array.isArray(to) ? to : [to],
      subject: 'An Important Update About dex',
      react: AcquisitionAnnouncementEmail({
        customerName,
        companyName,
        acquiringCompanyName,
        logoUrl,
        bannerUrl,
        effectiveDate,
        supportEmail,
        actionUrl,
      }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}

// Example usage - uncomment and modify to send test email
// sendAcquisitionEmail({
//   to: ['gustavo.beltrami@dexlabs.io', 'matheus.beltrami@dexlabs.io', 'isabela.ducret@dexlabs.io', 'luan.guimaraes@dexlabs.io'],
//   customerName: 'Team',
// });

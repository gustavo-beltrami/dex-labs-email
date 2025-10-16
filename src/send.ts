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
  effectiveDate?: string;
  supportEmail?: string;
  actionUrl?: string;
}

export async function sendAcquisitionEmail({
  to,
  customerName,
  companyName = process.env.FROM_NAME || 'Your Company',
  acquiringCompanyName = 'Acquiring Company',
  logoUrl = '',
  effectiveDate = 'January 1, 2025',
  supportEmail = process.env.FROM_EMAIL || 'support@company.com',
  actionUrl = '#',
}: SendEmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: Array.isArray(to) ? to : [to],
      subject: `Important Update: ${companyName} Acquisition Announcement`,
      react: AcquisitionAnnouncementEmail({
        customerName,
        companyName,
        acquiringCompanyName,
        logoUrl,
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
//   to: 'customer@example.com',
//   customerName: 'John Doe',
//   companyName: 'Your Company',
//   acquiringCompanyName: 'Acquiring Company',
//   logoUrl: 'https://yourdomain.com/logo.png',
//   effectiveDate: 'January 1, 2025',
//   supportEmail: 'support@yourcompany.com',
//   actionUrl: 'https://yourcompany.com/acquisition-info',
// });

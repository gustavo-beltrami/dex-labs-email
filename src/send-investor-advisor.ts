import 'dotenv/config';
import { Resend } from 'resend';
import { InvestorAdvisorAnnouncementEmail } from '../emails/investor-advisor-announcement';

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendInvestorAdvisorEmailOptions {
  to: string | string[];
  recipientName?: string;
  bannerUrl?: string;
  profilePhotoUrl?: string;
  schedulingUrl?: string;
  shutdownDate?: string;
}

export async function sendInvestorAdvisorEmail({
  to,
  recipientName,
  bannerUrl,
  profilePhotoUrl,
  schedulingUrl = 'https://app.reclaim.ai/m/gustavo-beltrami/flexible',
  shutdownDate = 'November 15th, 2025',
}: SendInvestorAdvisorEmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: Array.isArray(to) ? to : [to],
      replyTo: 'gustavo.beltrami@dexlabs.io',
      cc: 'gustavo.beltrami@dexlabs.io',
      subject: 'CONFIDENTIAL: Important Update About dex Labs',
      react: InvestorAdvisorAnnouncementEmail({
        recipientName,
        bannerUrl,
        profilePhotoUrl,
        schedulingUrl,
        shutdownDate,
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

// Investor and Advisor list
// TODO: Add your investors and advisors here
interface Recipient {
  email: string;
  name: string;
}

const investorAdvisorList: Recipient[] = [
  // Example:
  // { email: 'investor@example.com', name: 'John Doe' },
  // { email: 'advisor@example.com', name: 'Jane Smith' },
];

// Send to all investors and advisors - UNCOMMENT WHEN READY TO SEND
// Loop through each recipient and send individual emails
async function sendToAllInvestorsAdvisors() {
  if (investorAdvisorList.length === 0) {
    console.error('❌ ERROR: No recipients in investorAdvisorList');
    console.error('Please add investors and advisors to the list before sending.');
    return;
  }

  console.log(`📧 Preparing to send to ${investorAdvisorList.length} recipients\n`);

  const results = [];

  for (const recipient of investorAdvisorList) {
    console.log(`Sending to: ${recipient.name} <${recipient.email}>`);
    const result = await sendInvestorAdvisorEmail({
      to: recipient.email,
      recipientName: recipient.name,
    });
    results.push({ email: recipient.email, name: recipient.name, ...result });

    // Small delay between sends to avoid rate limiting (500ms = 2 per second max)
    // Resend API limits to 2 requests/second
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log('\n=== Send Summary ===');
  console.log(`Total: ${results.length}`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    console.log('\nFailed emails:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`- ${r.name} <${r.email}>: ${r.error}`);
    });
  }
}

// Uncomment to send to all investors and advisors
// sendToAllInvestorsAdvisors();


// Example usage - send test email
async function sendTestEmail() {
  console.log('📧 Sending test email...\n');

  await sendInvestorAdvisorEmail({
    to: 'gustavo.beltrami@dexlabs.io',
    recipientName: 'Gustavo',
  });

  console.log('\n✅ Test email sent!');
}

// Uncomment to send test email
// sendTestEmail();

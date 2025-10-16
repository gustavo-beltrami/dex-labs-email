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
      replyTo: 'gustavo.beltrami@dexlabs.io',
      cc: 'gustavo.beltrami@dexlabs.io',
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

// Customer list for acquisition announcement
// Total: 41 recipients
const customerList = [
  'matheus.beltrami@dexlabs.io',
  'luan.guimaraes@dexlabs.io',
  'financeiro@hubii.com.br',
  'nelson@hubii.com.br',
  'eduardo@hubii.com.br',
  'leo.dabague@hubii.com.br',
  'guilherme@minimalclub.com.br',
  'ana.zuchi@minimalclub.com.br',
  'feras@minimalclub.com.br',
  'pedro@minimalclub.com.br',
  'matheus.casas@minimalclub.com.br',
  'lucas.innocentini@minimalclub.com.br',
  'alexandre.alves@mahhp.org',
  'joao.costa@mahhp.org',
  'paulo.akira@mahhp.org',
  'samuel.barbosa@caffeinearmy.com.br',
  'antonio.ferreira@caffeinearmy.com.br',
  'gustavo.chaves@caffeinearmy.com.br',
  'haroldo.machado@caffeinearmy.com.br',
  'mariaisabel.veloso@caffeinearmy.com.br',
  'deX@robbin.dexlabs.io',
  'tomas@robbin.com.br',
  'rafael@robbin.com.br',
  'andre@robbin.com.br',
  'davi.fati@robbin.com.br',
  'marcos@robbin.com.br',
  'mateus@robbin.com.br',
  'rafael.lacerda@hoomy.com.br',
  'isabela.duarte@moonventures.com.br',
  'isadora.veloso@moonventures.com.br',
  'geovani@mombora.com.br',
  'carlos@brickseguros.com.br',
  'lorenza@brickseguros.com.br',
  'dex@brickseguros.dexlabs.io',
  'vitor.soares@brick.so',
  'paz@brick.so',
  'carol@insiderstore.com.br',
  'yuri@insiderstore.com.br',
  'takeo@a2capital.com.br',
  'thiago.cordeiro@uselinus.com.br',
  'moyses@a2capital.com.br',
];

// Send to all customers - UNCOMMENT WHEN READY TO SEND
// Loop through each customer and send individual emails
async function sendToAllCustomers() {
  const results = [];

  for (const email of customerList) {
    console.log(`Sending to: ${email}`);
    const result = await sendAcquisitionEmail({
      to: email,
      customerName: 'Valued Customer',
    });
    results.push({ email, ...result });

    // Small delay between sends to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
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
      console.log(`- ${r.email}: ${r.error}`);
    });
  }
}

// Uncomment to send
// sendToAllCustomers();

// Example usage - send test email
// sendAcquisitionEmail({
//   to: 'gustavo.beltrami@dexlabs.io',
//   customerName: 'Gustavo',
// });

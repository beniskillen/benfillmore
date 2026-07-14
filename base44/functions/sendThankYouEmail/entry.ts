import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const { data } = body;
    const name = data?.name;
    const email = data?.email;
    const businessName = data?.business_name;
    const niche = data?.niche;
    const adSpend = data?.monthly_ad_spend;
    const challenge = data?.biggest_challenge;
    const website = data?.website;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'hello@fillmoremedia.com.au',
      from_name: 'Fillmore Media',
      subject: `New lead: ${name || 'Unknown'} — ${businessName || ''}`,
      body: `New application received from the website.

Name: ${name || '—'}
Business: ${businessName || '—'}
Email: ${email || '—'}
Website: ${website || '—'}
Niche: ${niche || '—'}
Monthly Ad Spend: ${adSpend || '—'}
Biggest Challenge: ${challenge || '—'}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
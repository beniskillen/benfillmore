import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const { data } = body;
    const email = data?.email;
    const name = data?.name;

    if (!email) {
      return Response.json({ error: 'No email found' }, { status: 400 });
    }

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: email,
      from_name: 'Fillmore Media',
      subject: "We've received your application — speak soon.",
      body: `Hi ${name || 'there'},

Thanks for reaching out to Fillmore Media.

We've received your details and one of our team will be in touch with you shortly to discuss next steps.

In the meantime, if you have any questions feel free to reply to this email.

Talk soon,
The Fillmore Team
fillmoremedia.com.au`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

// Replace this with your Google Sheet ID (must be a native Google Sheet, not Office file)
const SPREADSHEET_ID = Deno.env.get('GOOGLE_SHEET_ID') || '1IvyYQBAq3_CDD-LzWjMSbgoEXnaQeK-LD44U43KeCms';
const SHEET_NAME = 'Lead Tracker';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlesheets');

    const body = await req.json();
    const { name, business_name, email, website, niche, monthly_ad_spend, biggest_challenge } = body;

    // Columns: Date Added | Lead Name / Business | Industry | Source | Contact Person | Email | Phone | Stage | Next Action | Next Action Date | Notes
    const row = [
      new Date().toLocaleDateString('en-AU', { timeZone: 'Australia/Sydney' }),
      `${name || ''} / ${business_name || ''}`.trim().replace(/^\/ |\/$/, ''),
      niche || '',
      'Website Form',
      name || '',
      email || '',
      '',
      'New Lead',
      'Send intro email',
      '',
      [biggest_challenge, website ? `Website: ${website}` : '', monthly_ad_spend ? `Ad spend: ${monthly_ad_spend}` : ''].filter(Boolean).join(' | '),
    ];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: [row] }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return Response.json({ error: err }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const SPREADSHEET_ID = '1IvyYQBAq3_CDD-LzWjMSbgoEXnaQeK-LD44U43KeCms';
const SHEET_NAME = 'Lead Tracker';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlesheets');

    const body = await req.json();
    const { name, business_name, email, website, niche, monthly_ad_spend, biggest_challenge } = body;

    console.log('[DEBUG] Using SPREADSHEET_ID:', SPREADSHEET_ID);
    console.log('[DEBUG] Using SHEET_NAME:', SHEET_NAME);

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

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}!A:K:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    console.log('[DEBUG] Request URL:', url);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [row] }),
    });

    const responseText = await res.text();
    console.log('[DEBUG] API status:', res.status);
    console.log('[DEBUG] API response:', responseText);

    if (!res.ok) {
      return Response.json({ error: responseText, status: res.status }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.log('[DEBUG] Caught error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});
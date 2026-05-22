import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const SPREADSHEET_ID = '12S4KCIKPIoVh4OvawEZboMEvnczIGTWM';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlesheets');

    const body = await req.json();
    const { name, business_name, email, website, niche, monthly_ad_spend, biggest_challenge } = body;

    const row = [
      new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' }),
      name || '',
      business_name || '',
      email || '',
      website || '',
      niche || '',
      monthly_ad_spend || '',
      biggest_challenge || '',
    ];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
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
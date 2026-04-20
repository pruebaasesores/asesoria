import { NextResponse } from 'next/server';

const getBaseUrl = () => process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export async function POST(request: Request) {
  const body = (await request.json()) as {
    expertName?: string;
    expertSlug?: string;
    slotLabel?: string;
    amount?: number;
    note?: string;
  };

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const baseUrl = getBaseUrl();

  if (!stripeSecretKey) {
    const params = new URLSearchParams({
      expert: body.expertName || 'Experto demo',
      slot: body.slotLabel || 'Slot demo',
      amount: String(body.amount || 0),
    });

    return NextResponse.json({ url: `${baseUrl}/success?${params.toString()}` });
  }

  const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      mode: 'payment',
      success_url: `${baseUrl}/success?expert=${encodeURIComponent(body.expertName || 'Experto')}&slot=${encodeURIComponent(body.slotLabel || 'Slot')}&amount=${encodeURIComponent(String(body.amount || 0))}`,
      cancel_url: `${baseUrl}/browse`,
      'line_items[0][price_data][currency]': 'eur',
      'line_items[0][price_data][product_data][name]': `Sesión con ${body.expertName || 'experto'}`,
      'line_items[0][price_data][product_data][description]': body.note || 'Reserva gestionada desde Guilda',
      'line_items[0][price_data][unit_amount]': String(Math.round((body.amount || 0) * 100)),
      'line_items[0][quantity]': '1',
      'metadata[expert_slug]': body.expertSlug || '',
      'metadata[slot_label]': body.slotLabel || '',
    }),
  });

  if (!stripeResponse.ok) {
    const fallbackParams = new URLSearchParams({
      expert: body.expertName || 'Experto',
      slot: body.slotLabel || 'Slot',
      amount: String(body.amount || 0),
    });
    return NextResponse.json({ url: `${baseUrl}/success?${fallbackParams.toString()}` });
  }

  const stripeData = (await stripeResponse.json()) as { url?: string };
  return NextResponse.json({ url: stripeData.url || `${baseUrl}/success` });
}

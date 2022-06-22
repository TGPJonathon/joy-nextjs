const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 0,
                currency: 'usd',
              },
              display_name: 'Free shipping',
              // Delivers between 5-7 business days
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1500,
                currency: 'usd',
              },
              display_name: 'Next day air',
              // Delivers in exactly 1 business day
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 1,
                },
                maximum: {
                  unit: 'business_day',
                  value: 1,
                },
              },
            },
          },
        ],
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1LD91DAOkjCfWJzPzrKagpfd',
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 99,
            },
            quantity: 1,
          },
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1LD8koAOkjCfWJzPx4bNYEx1',
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 99,
            },
            quantity: 1,
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

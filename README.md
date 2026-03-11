## Contact Form Setup

The contact form sends mail through a Vercel serverless function backed by Resend.

Set these environment variables before using the form:

- `RESEND_API_KEY`: your Resend API key.
- `CONTACT_FROM_EMAIL`: optional sender address. The default uses `onboarding@resend.dev`.

For local development, copy `.env.example` to `.env.local` and add your key.

For Vercel, add the same variables in the project environment settings and redeploy.

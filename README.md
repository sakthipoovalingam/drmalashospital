# Doctor Clinic Website Starter

A responsive Next.js website starter for a doctor/clinic profile. The design is inspired by the general structure of premium medical websites but does not copy any specific site's code, text, imagery, or branding.

## Requirements

- Node.js 20+ (Node 24 is recommended for the current Next.js 16.3 line)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize before publishing

Search and replace the sample values in `app/page.js`:

- `Dr. Arjun Kumar`
- `+91 98765 43210`
- `919876543210`
- `appointments@example.com`
- sample qualifications / statistics
- clinic address and hours
- service descriptions

Replace `public/doctor-placeholder.svg` with a licensed photo, for example `public/doctor.jpg`, and update the image path in `app/page.js`.

## Appointment form

`app/api/appointment/route.js` validates submissions and applies a small in-memory rate limit, but intentionally does not persist medical information. For production, connect it to an appropriate secure appointment/CRM system and review applicable privacy requirements.

Do not place secrets in client-side code or `NEXT_PUBLIC_*` variables unless the value is intentionally public.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Sign in to Vercel and choose **Add New > Project**.
3. Import the GitHub repository.
4. Vercel should detect **Next.js** automatically.
5. Deploy with the default build settings.
6. Add your custom domain in the Vercel project settings.

You can also use the Vercel CLI after installing it globally.

## Production security checklist

- Keep Next.js patched to a currently supported security release.
- Do not commit `.env` files or API keys.
- Use a production-grade persistent rate limiter/WAF if the form becomes public/high traffic.
- Connect the form only to a secure backend approved for the data you collect.
- Collect the minimum patient information necessary.
- Add CAPTCHA/bot protection if spam appears.
- Configure security headers/CSP after deciding which analytics, map and media providers you will use.
- Enable MFA on GitHub, Vercel, domain registrar and email/CRM accounts.
- Keep backups of business-critical content/data outside the frontend deployment.

## Important

The names, qualifications, statistics, testimonials and address in this starter are placeholders. Replace them with accurate, authorized information before publishing.

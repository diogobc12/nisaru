# Nisaru EcoLife - Sustainable Living

A beautiful website for exploring and celebrating nature, sustainability, and regenerative living with Nisaru EcoLife. The site includes a fully functional donation system powered by Stripe.

## Deployment Instructions

### Prerequisites

- A [Vercel](https://vercel.com/) account
- A [Stripe](https://stripe.com/) account
- Your Stripe API keys

### Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to Developers → API keys
3. Copy your **Secret Key** for use in the Vercel environment variables
4. Make sure you have a product set up for donations (you're using `prod_SICzJiBUUvRKrV`)

### Step 2: Deploy to Vercel

1. Push your code to a GitHub repository
2. Log in to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project with the following settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 3: Set Environment Variables

1. In the Vercel project settings, go to the "Environment Variables" tab
2. Add the following environment variable:
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_SERVICE_KEY=
3. Click "Save"

### Step 4: Deploy Your Application

1. Click "Deploy" to deploy your application
2. Once deployed, your site will be available at a Vercel URL (e.g., `https://your-project.vercel.app`)

## How It Works

This application uses Vercel Serverless Functions to handle Stripe checkout sessions. Here's the flow:

1. User selects an amount to donate on the website
2. Frontend sends a request to the `/api/create-checkout-session` serverless function
3. The function creates a Stripe checkout session with the dynamic amount
4. User is redirected to the Stripe checkout page
5. After completing the payment, user is redirected back to the success page

## Local Development

```bash
npm install
npm run dev
```

When running locally, the donation system will run in demo mode and simulate successful donations without actually processing payments.

## Customization

To customize the donation system further, you can:

1. Update the product ID in `src/stripe-config.ts`
2. Modify the success and cancel pages in `src/App.tsx`
3. Customize the checkout experience in the serverless function at `api/create-checkout-session.js`

---

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/diogobc12/nisaru)
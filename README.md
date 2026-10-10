
# RecipeHub 🍽️

**RecipeHub** is a full-stack recipe-sharing and discovery platform where users can explore recipes, publish their own dishes, save favorites, and access premium content. It also includes an admin dashboard for managing users, recipes, reports, and transactions.

## ✨ Features

- Browse and discover recipes by category, cuisine, or search.
- Publish recipes with ingredients, instructions, preparation details, and images.
- Upload recipe images through ImgBB.
- Like and save recipes for later.
- Report recipes for admin review.
- User authentication with email/password and Google sign-in.
- Premium membership and paid recipe access using Stripe.
- View purchased recipes.
- Admin dashboard for managing users, recipes, reports, and transactions.
- Responsive user interface.

## 🧰 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Lucide React
- Gravity UI Icons
- react-hot-toast

**Backend and Database**
- Node.js
- Express.js
- MongoDB

**Authentication, Payments, and Media**
- Better Auth
- Stripe
- ImgBB

**Deployment and Version Control**
- Vercel
- Git and GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- MongoDB database
- ImgBB API key
- Stripe test keys
- Google OAuth credentials, if Google sign-in is enabled

## 💳 Payments

RecipeHub uses Stripe Checkout to process payments and Stripe webhooks to handle completed transactions and premium access updates.

## 🔐 Security

- Keep secret keys in environment variables.
- Never commit `.env` or `.env.local` files.
- Configure production environment variables in Vercel.
- Protect private backend routes with proper authentication and authorization.

## 📦 Deployment

- Frontend: Vercel
- Backend: Vercel
- Database: MongoDB
- Payments: Stripe
- Images: ImgBB

Configure the required environment variables and webhook URL before deploying.


*Made with ❤️ for food lovers and cooking enthusiasts.*

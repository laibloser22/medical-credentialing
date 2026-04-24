# Medical Credentialing Management System

A full-stack web application I built for managing medical credentialing operations and client onboarding. It allows healthcare providers to submit their credentials, track their application status, and communicate with the admin team.

## 🔗 Live Demo
- **Frontend:** https://medical-credentialing.vercel.app
- **Backend:** https://medical-credentialing-backend.onrender.com

> Note: Backend is hosted on Render free tier — first load may take 30-60 seconds to wake up.

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js + Express.js
- **Database:** PostgreSQL (Neon.tech)
- **ORM:** Prisma
- **Authentication:** JWT
- **Deployment:** Vercel (Frontend) + Render (Backend)

## ✨ Features

### User Side
- Register and login securely
- Submit credentialing requests with document upload
- Track application status in real time
- Contact support team directly

### Admin Side
- Secure admin login (separate role)
- View and manage all credentialing requests
- Approve, Reject or mark as Pending
- View all contact messages from clients

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

1. Clone the repository
   `git clone https://github.com/laibloser22/medical-credentialing.git`

2. Setup Backend
   `cd backend`
   `npm install`

3. Create .env file in backend folder
   `PORT=5000`
   `DATABASE_URL=your_neon_postgresql_url`
   `JWT_SECRET=your_jwt_secret`

4. Run database migrations
   `npx prisma migrate dev`

5. Start backend server
   `node index.js`

6. Setup Frontend
   `cd frontend`
   `npm install`
   `npm run dev`

## 📡 API Endpoints

### Auth
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Requests
- POST /api/requests - Submit new request
- GET /api/requests/my-requests - Get logged in user's requests
- GET /api/requests/all - Get all requests (admin only)
- PUT /api/requests/:id/status - Update request status (admin only)

### Contact
- POST /api/contact - Send support message
- GET /api/contact/all - Get all messages (admin only)

## 👤 Test Credentials

### Admin Account
- Email: admin@quadsolutions.com
- Password: admin123

### User Account
- Email: test@gmail.com
- Password: 123456

## 📁 Project Structure
- frontend/ - React.js application
- backend/ - Node.js + Express API
- backend/prisma/ - Database schema and migrations
- backend/src/controllers/ - Business logic
- backend/src/routes/ - API route definitions
- backend/src/middleware/ - JWT authentication middleware
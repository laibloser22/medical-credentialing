# Medical Credentialing Management System

A full-stack web application for managing medical credentialing operations and client onboarding.

## 🔗 Live Demo
- **Frontend:** https://medical-credentialing.vercel.app
- **Backend:** https://medical-credentialing-backend.onrender.com

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js + Express.js
- **Database:** PostgreSQL (Neon.tech)
- **ORM:** Prisma
- **Authentication:** JWT
- **Deployment:** Vercel (Frontend) + Render (Backend)

## ✨ Features

### User Side
- User registration and login
- Submit credentialing requests with document upload
- Track application status in real time
- Contact support

### Admin Side
- Secure admin login
- View all credentialing requests
- Approve / Reject / Pending status updates
- View all contact messages

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

5. Start backend
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
- POST /api/requests - Submit request
- GET /api/requests/my-requests - Get user requests
- GET /api/requests/all - Get all requests (admin)
- PUT /api/requests/:id/status - Update status (admin)

### Contact
- POST /api/contact - Send message
- GET /api/contact/all - Get all messages (admin)

## 👤 Test Credentials

### Admin
- Email: admin@quadsolutions.com
- Password: admin123

### User
- Email: test@gmail.com
- Password: 123456

## 📁 Project Structure
- frontend/ - React.js application
- backend/ - Node.js + Express API
- backend/prisma/ - Database schema and migrations
- backend/src/controllers/ - API controllers
- backend/src/routes/ - API routes
- backend/src/middleware/ - Auth middleware
# API Documentation

## Base URL
https://medical-credentialing-backend.onrender.com

## Notes
- All protected routes require a Bearer token in the Authorization header
- Token is received after login or register
- Admin routes are only accessible by users with admin role

---

## Authentication

### Register
POST /api/auth/register

Creates a new user account.

Body:
{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "123456",
  "role": "user"
}

---

### Login
POST /api/auth/login

Logs in an existing user and returns a JWT token.

Body:
{
  "email": "john@example.com",
  "password": "123456"
}

---

## Credentialing Requests

### Submit Request
POST /api/requests
Auth: Required

Submits a new credentialing request with optional document upload.

---

### Get My Requests
GET /api/requests/my-requests
Auth: Required

Returns all requests submitted by the logged in user.

---

### Get All Requests
GET /api/requests/all
Auth: Required (Admin only)

Returns all requests from all users.

---

### Update Status
PUT /api/requests/:id/status
Auth: Required (Admin only)

Updates the status of a request to approved, rejected or pending.

Body:
{
  "status": "approved"
}

---

## Contact

### Send Message
POST /api/contact

Sends a support message. No auth required.

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need help"
}

---

### Get All Messages
GET /api/contact/all
Auth: Required (Admin only)

Returns all contact messages.

---

## Status Codes
200 - Success
201 - Created
400 - Bad Request
401 - Unauthorized
403 - Forbidden (Admin only)
500 - Server Error
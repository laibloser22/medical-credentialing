# API Documentation
## Base URL
---

## Authentication APIs

### Register User
- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```
- **Success Response:**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### Login User
- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```
- **Success Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

## Credentialing Request APIs

### Submit Request
- **URL:** `/api/requests`
- **Method:** `POST`
- **Auth:** Bearer Token Required
- **Body:** Form Data
jobRole: Cardiologist
description: 10 years experience
deadline: 2026-05-01
documents: file (optional)
- **Success Response:**
```json
{
  "message": "Request submitted successfully",
  "request": {
    "id": "request_id",
    "jobRole": "Cardiologist",
    "status": "pending"
  }
}
```

---

### Get My Requests (User)
- **URL:** `/api/requests/my-requests`
- **Method:** `GET`
- **Auth:** Bearer Token Required
- **Success Response:**
```json
[
  {
    "id": "request_id",
    "jobRole": "Cardiologist",
    "description": "10 years experience",
    "status": "pending",
    "deadline": "2026-05-01",
    "createdAt": "2026-04-22"
  }
]
```

---

### Get All Requests (Admin Only)
- **URL:** `/api/requests/all`
- **Method:** `GET`
- **Auth:** Bearer Token Required (Admin)
- **Success Response:**
```json
[
  {
    "id": "request_id",
    "jobRole": "Cardiologist",
    "status": "pending",
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
]
```

---

### Update Request Status (Admin Only)
- **URL:** `/api/requests/:id/status`
- **Method:** `PUT`
- **Auth:** Bearer Token Required (Admin)
- **Body:**
```json
{
  "status": "approved"
}
```
- **Success Response:**
```json
{
  "message": "Status updated successfully",
  "request": {
    "id": "request_id",
    "status": "approved"
  }
}
```

---

## Contact APIs

### Send Message
- **URL:** `/api/contact`
- **Method:** `POST`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need help with my application"
}
```
- **Success Response:**
```json
{
  "message": "Message sent successfully",
  "contact": {
    "id": "message_id",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I need help with my application"
  }
}
```

---

### Get All Messages (Admin Only)
- **URL:** `/api/contact/all`
- **Method:** `GET`
- **Auth:** Bearer Token Required (Admin)
- **Success Response:**
```json
[
  {
    "id": "message_id",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I need help",
    "createdAt": "2026-04-22"
  }
]
```

---

## Error Responses
```json
{
  "message": "Error description here"
}
```

## Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `500` - Server Error
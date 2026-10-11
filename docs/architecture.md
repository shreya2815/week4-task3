# Week 4 Task 3: Cloud Deployment

## 1. Project Overview

This project demonstrates how to prepare a web application
for deployment on a cloud platform.

## 2. Architecture

The application contains two main components:

- Frontend: HTML page located in the client folder.
- Backend: Node.js and Express application located in the server folder.

## 3. Application Flow

User
  |
  v
Frontend (HTML)
  |
  v
Backend (Express API)
  |
  v
Health Check API (/health)

## 4. Backend Configuration

The backend uses environment variables to configure
the application port.

Default port: 5000

## 5. Docker

The Dockerfile packages the backend application into
a container image.

## 6. Deployment

The application will be prepared for deployment
to a cloud hosting platform.

## 7. Security

- Do not upload the .env file to GitHub.
- Store production secrets securely.
- Use HTTPS for production traffic.
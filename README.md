# Facehub

**Facehub** is a feature-rich social networking web application designed to foster connections and interactions among users. It includes robust user authentication, profile management, a dynamic friend list, and a variety of interactive social media functionalities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **User Authentication**: Secure registration and login with JWT-based session handling.
- **Profile Management**: Users can personalize and manage their profiles.
- **Friend List**: Interactive friend requests, follow/unfollow functionality.
- **Content Sharing**: Upload images and videos, fostering multimedia sharing among users.
- **Real-Time Interactions**: Users can comment on posts, and interact with likes and dislikes.
- **Security**: Implemented JWT authentication to ensure secure sessions.

## Tech Stack

- **Frontend**: React, CSS, MUI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Cloud Storage**: Firebase for image and video uploads
- **Authentication**: JWT for session management

## Installation

```bash
# Clone the repository
git clone https://github.com/username/facehub.git
cd facehub

# Install dependencies for both backend and frontend
npm install
cd client
npm install

# Set up Firebase for image and video uploads and retrieve the necessary credentials

# Start the development server
# Backend
npm start
# Frontend
cd client && npm start
```

## Environment Variables

Create a `.env` file in the root directory to store sensitive information. Here’s an example:

```env
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
```

## Usage

Once the server is running, you can:
- Register a new user account.
- Edit your profile, manage friend requests, and post images and videos.
- Engage with posts through comments, likes, and dislikes.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login a user and generate JWT.

- **User Operations**
  - `GET /api/users/:id`: Get user details.
  - `PUT /api/users/:id`: Update user information.

- **Post Operations**
  - `POST /api/posts`: Create a new post.
  - `GET /api/posts`: Fetch all posts.
  - `PUT /api/posts/:id/like`: Like or dislike a post.

# 📝 Blog App

A modern **full-stack blogging platform** built using the **MERN Stack** with secure authentication, role-based authorization, article management, image uploads, and responsive UI.

---

## 🌐 Live Demo

| Service | URL |
|----------|-----|
| Frontend | https://blog-app-iota-wheat-55.vercel.app |
| Backend | https://render.com |

---

# ✨ Features

## 🔐 Authentication & Authorization
- Secure user registration and login
- JWT authentication using HTTP-only cookies
- Password hashing with bcryptjs
- Persistent login sessions

---

## 👥 Role-Based Access Control

### 👤 User
- Browse all articles
- Read article details
- Add comments to articles

### ✍️ Author
- Create new articles
- Edit existing articles
- Manage personal articles
- Upload article images

### 🛡️ Admin
- View all users
- Enable / disable user accounts
- Manage platform users

---

# 🚀 Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | UI Library |
| React Router 7 | Client-side Routing |
| Zustand | Global State Management |
| Axios | API Requests |
| React Hook Form | Form Handling & Validation |
| React Hot Toast | Notifications |
| Tailwind CSS 4 | Styling |
| Vite 8 | Build Tool |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Express 5 | Backend Framework |
| Mongoose 9 | MongoDB ODM |
| JSON Web Token | Authentication |
| bcryptjs | Password Hashing |
| Cloudinary | Image Storage |
| Multer | File Upload Middleware |
| cookie-parser | Cookie Handling |
| dotenv | Environment Variables |

---

## Database
- MongoDB Atlas (Cloud Hosted)

---

# 📁 Project Structure

```bash
blog-app/
│
├── blog-app-backend/
│   ├── APIs/
│   │   ├── AdminAPI.js
│   │   ├── AuthorAPI.js
│   │   ├── CommonAPI.js
│   │   └── UserAPI.js
│   │
│   ├── config/
│   ├── middlewares/
│   │   └── verifyToken.js
│   │
│   ├── models/
│   │   ├── ArticleModel.js
│   │   └── UserModel.js
│   │
│   ├── server.js
│   ├── render.yaml
│   └── .env
│
├── blog-app-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── axiosConfig.js
│   │   └── App.jsx
│   │
│   ├── vercel.json
│   └── vite.config.js
│
└── README.md
```

---

# 🔥 Core Features

## 📰 Article Management
- Full CRUD operations
- Rich article content
- Categories & tagging
- Soft delete functionality

---

## 💬 Comment System
- Add comments to articles
- Real-time interaction experience
- User-specific commenting

---

## 🖼️ Image Uploads
- Cloudinary integration
- Multer middleware support
- Profile picture uploads
- Article cover image uploads

---

## 🔒 Protected Routes
- Role-based route protection
- Unauthorized access handling
- Secure frontend navigation guards

---

# ⚙️ Installation & Setup

## 📋 Prerequisites

Make sure you have installed:

- Node.js ≥ 18
- npm ≥ 9
- MongoDB Atlas account
- Cloudinary account

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/dharanirampongu/blog-app.git

cd blog-app
```

---

# 2️⃣ Backend Setup

```bash
cd blog-app-backend

npm install
```

Create a `.env` file inside `blog-app-backend/`

```env
PORT=4000

DB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/BlogApp

SECRET_KEY=your_jwt_secret_key

FRONTEND_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

Start Backend Server:

```bash
npm start
```

---

# 3️⃣ Frontend Setup

```bash
cd blog-app-frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 📡 API Endpoints

## 🔐 Auth Routes (`/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login user |
| POST | `/auth/logout` | Logout user |

---

## 👤 User Routes (`/user-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user-api/articles` | Get all articles |
| POST | `/user-api/comment` | Add article comment |

---

## ✍️ Author Routes (`/author-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/author-api/articles` | Get author articles |
| POST | `/author-api/article` | Create article |
| PUT | `/author-api/article` | Update article |
| DELETE | `/author-api/article/:id` | Soft delete article |

---

## 🛡️ Admin Routes (`/admin-api`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin-api/users` | Get all users |
| PUT | `/admin-api/user/toggle` | Enable / Disable account |

---

# 🚢 Deployment

| Layer | Platform | Config |
|-------|----------|--------|
| Frontend | Vercel | `vercel.json` |
| Backend | Render | `render.yaml` |

Set the same environment variables listed above in each platform dashboard.

---

# 🌟 Future Enhancements

- 🔍 Advanced search functionality
- ❤️ Like & bookmark system
- 📧 Email verification
- 🌙 Dark mode
- 🔔 Real-time notifications
- 📱 Progressive Web App (PWA)
- 🤝 Social login (Google/GitHub)

---

# 🧪 Suggested Test Accounts

```txt
USER
Email: user@example.com
Password: user123

AUTHOR
Email: author@example.com
Password: author123

ADMIN
Email: admin@example.com
Password: admin123
```

---

# 📌 Environment Variables

## Backend `.env`

```env
PORT=

DB_URL=

SECRET_KEY=

FRONTEND_URL=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# 🛠️ Available Scripts

## Frontend

```bash
npm run dev

npm run build

npm run preview
```

## Backend

```bash
npm start

npm run dev
```

---

# 🤝 Contributing

Contributions are welcome!

```bash
1. Fork the repository

2. Create your feature branch

3. Commit your changes

4. Push to the branch

5. Open a Pull Request
```

---


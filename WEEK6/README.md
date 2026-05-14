# Week 6: Advanced React & State Management

Focus on handling complex state, side effects, and global state management using the Context API.

## Projects

- **AddingUsers**: Form handling and dynamic list updates in React.
- **context-app**: Implementation of the React Context API for global state.
- **employee**: An employee management dashboard using React.
- **userList**: Efficient rendering and filtering of user data.

## Key Concepts
- `useState` and `useEffect` hooks.
- `useContext` for state sharing.
- Component lifecycle and optimization.
- Dynamic list rendering.

#  Adding Users Module

This repository contains the implementation of the **Adding Users** feature using a full-stack architecture with separate frontend and backend applications.

The project demonstrates:
- User management
- React Context API
- Employee data handling
- REST API integration
- Full-stack communication between frontend and backend

---

# 📁 Project Structure

```bash
WEEK6/
│
├── context-app/              # React Context API demo application
│
├── employee/                 # Employee management project
│
├── employee-backend/         # Node.js + Express backend
│
└── frontend/                 # React frontend application
```

---

# 🚀 Features

## 👤 User Management
- Add new users
- Display user details
- Manage employee records
- Dynamic rendering using React

---

## ⚛️ Context API Integration
- Global state management using React Context API
- Avoids prop drilling
- Shared state across components

---

## 🔗 Frontend & Backend Integration
- REST API communication using Axios/Fetch
- Real-time data updates
- CRUD operations support

---

# 🛠️ Tech Stack

## Frontend
| Technology | Purpose |
|------------|---------|
| React | UI Development |
| React Router | Navigation |
| Context API | Global State Management |
| Axios / Fetch | API Requests |
| CSS / Tailwind | Styling |

---

## Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |

---

# 📂 Folder Details

## 📁 context-app
A React application demonstrating:
- React Context API
- Shared state management
- Component communication

---

## 📁 employee
Contains:
- Employee-related UI components
- Employee list rendering
- Employee management functionality

---

## 📁 employee-backend
Backend server responsible for:
- API creation
- Database connection
- Employee data management
- User handling

---

## 📁 frontend
Frontend application responsible for:
- User Interface
- API integration
- Displaying employee data
- Forms & validation

---

# ⚙️ Installation & Setup

## 📋 Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB

---

# 1️⃣ Clone Repository

```bash
git clone <repository-url>

cd WEEK6
```

---

# 2️⃣ Backend Setup

```bash
cd employee-backend

npm install
```

Create a `.env` file:

```env
PORT=4000

DB_URL=your_mongodb_connection_string
```

Start backend server:

```bash
npm start
```

---

# 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 📡 Sample API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| POST | `/employees` | Add employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

---

# 🔥 Key Concepts Covered

- React Context API
- REST APIs
- CRUD Operations
- React Hooks
- State Management
- Express Routing
- MongoDB Integration

---

# 📸 Application Overview

## Frontend
- Responsive UI
- Employee forms
- User-friendly interface

## Backend
- API handling
- Database operations
- Server-side logic

---

# 🧪 Available Scripts

## Frontend

```bash
npm run dev
npm run build
```

## Backend

```bash
npm start
npm run dev
```

---

# 🌟 Future Enhancements

- Authentication & Authorization
- Role-based access
- Search & filtering
- Pagination
- Profile image uploads
- Dashboard analytics

---

# 🤝 Contributing

Contributions are welcome!

```bash
1. Fork the repository

2. Create a new branch

3. Commit your changes

4. Push to GitHub

5. Create a Pull Request
```

---


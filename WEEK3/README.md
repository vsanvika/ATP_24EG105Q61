# 📘 WEEK 3 — Backend API Development

This repository contains backend development practice projects and API implementations developed during **Week 3**.

The project focuses on:
- REST API development
- Express.js server setup
- MongoDB integration
- Product management APIs
- Backend architecture
- HTTP request handling

---

# 📁 Project Structure

```bash
WEEK3/
│
├── BACKEND-2/
│
├── .gitignore
├── ProductAPI.js
├── ProductModel.js
├── README.md
├── package-lock.json
├── package.json
├── req.http
└── server.js
```

---

# 🚀 Project Overview

This project demonstrates the implementation of a backend application using **Node.js**, **Express.js**, and **MongoDB**.

The application provides:
- Product API routes
- Database integration
- CRUD operations
- RESTful API architecture

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| REST Client | API Testing |

---

# 📂 File Details

---

## 📁 BACKEND-2
Contains:
- Backend practice implementations
- API logic
- Server-side project structure

---

## 📄 server.js
Main entry point of the backend application.

### Responsibilities
- Express server setup
- Middleware configuration
- Database connection
- Route integration

---

## 📄 ProductAPI.js
Contains API routes related to products.

### Features
- Get all products
- Add new product
- Update product
- Delete product

### Concepts Covered
- Express routing
- CRUD operations
- Request & response handling

---

## 📄 ProductModel.js
Defines MongoDB product schema using Mongoose.

### Concepts Covered
- Mongoose schema
- Data modeling
- Validation

---

## 📄 req.http
Contains sample HTTP requests for API testing.

### Used For
- Testing endpoints
- Sending GET/POST/PUT/DELETE requests

---

## 📄 package.json
Contains:
- Project metadata
- Dependencies
- Scripts

---

## 📄 .gitignore
Specifies files/folders ignored by Git.

---

# 🔥 Features

## 🛒 Product Management
- Add products
- View products
- Update product details
- Delete products

---

## 🌐 REST API
Implements RESTful architecture using Express.js.

### Supported Methods
- GET
- POST
- PUT
- DELETE

---

## 🗄️ Database Integration
- MongoDB connection
- Data storage
- Schema validation

---

# 📡 Sample API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| POST | `/products` | Add new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

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
```

---

# 2️⃣ Navigate to Project

```bash
cd WEEK3
```

---

# 3️⃣ Install Dependencies

```bash
npm install
```

---

# 4️⃣ Configure Database

Create a `.env` file:

```env
PORT=4000

DB_URL=mongodb://localhost:27017/anuragDB1
```

---

# 5️⃣ Start Server

```bash
npm start
```

OR

```bash
node server.js
```

---

# 🌐 Server Runs On

```bash
http://localhost:4000
```

---

# 🧪 API Testing

Use:
- VS Code REST Client
- Postman
- Thunder Client

Sample requests are available in:

```bash
req.http
```

---

# 📚 Concepts Covered

## Backend Development
- Express server setup
- Routing
- Middleware
- API architecture

---

## MongoDB & Mongoose
- Schema creation
- CRUD operations
- Database connectivity

---

## REST APIs
- GET requests
- POST requests
- PUT requests
- DELETE requests

---

# 📸 Project Highlights

## 🚀 Backend Features
✔ REST API implementation  
✔ MongoDB integration  
✔ Product management system  

---

## 🛠️ Development Concepts
✔ Express routing  
✔ Mongoose schema design  
✔ HTTP request handling  

---

# 🌟 Future Enhancements

- Add authentication
- Add JWT authorization
- Add image uploads
- Add pagination
- Add search & filtering
- Add frontend integration

---

# 🎯 Learning Outcomes

By completing this project, you will understand:
- Backend application structure
- REST API development
- MongoDB integration
- CRUD operations
- Express.js fundamentals

---


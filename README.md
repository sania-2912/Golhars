# Golhars
Golhars is an E-commerce website designed and developed to sell and commercialize my Painting Collection.

## 🧭 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [How I Built It](#how-i-built-it)

---

## 📌 About the Project

**Golhars** is an online platform where users can:
- Browse and buy original paintings 
- View a responsive admin dashboard to manage listings, track sales, and analyze user behavior

---

## ✨ Features

### 🛍️ Customer-Facing
- Browse all paintings 
- View product details, pricing, and availability
- Add to cart and checkout
- Customize products based on user preferences (color, size, style)
- Beginner-friendly guides and FAQs

### 🛠️ Admin Panel
- Secure login for admin
- Add, edit, or remove products
- Upload product images
- Monitor orders and customer interactions
- Data visualization & basic analytics (coming soon)

### 🔒 Authentication
- Basic user login/signup system
- Admin and user role segregation (extendable)

---

## 💻 Tech Stack

### 🧠 Frontend (Client + Admin)
- **HTML5**, **CSS3**, **JavaScript (ES6+)**
- **React.js** with **Vite**
- **Axios** for HTTP requests
- **Tailored UI** using plain CSS and design precision (no Tailwind)

### 🖥️ Backend
**Node.js** with **Express.js**
-MongoDB Atlas (Cloud-hosted NoSQL DB) for storing product and user data
-Cloudinary for storing images and metadata securely
-REST API structure for client-server communication
-Mongoose used as ODM for MongoDB
-.env-based configuration for managing DB URI and Cloudinary secrets
-Basic authentication (upgraded to JWT-based sessions)

### 🗄️ Database
-MongoDB Atlas (NoSQL document-based storage)
-Collections include products, users, orders, and customizations
-Images and associated metadata are stored via Cloudinary API
-Secure access to DB and Cloudinary via .env variables

Environment variables used:
MONGO_URI=your_mongodb_atlas_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### 🛠️ Tools & Services
- **VS Code** for development
- **Git** and **GitHub** for version control
- **Render** for deployment (Node.js and static hosting)

---

## 📁 Folder Structure

Golhars/
|
├── admin/ → Admin dashboard (React + Vite)
│ ├── src/
│ ├── public/
│ └── package.json
│
├── client/ → Main frontend (React + Vite)
│ ├── src/
│ ├── public/
│ ├── index.html
│ └── package.json
│
├── server/ → Backend (Node.js + Express)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ └── server.js
│
├── .gitignore
└── README.md → This file

🏗️ How I Built It
-Frontend (client): Built using React.js + Vite for speed and modularity. UI is hand-designed with custom CSS for a lightweight, artistic touch — no CSS frameworks used.
-Admin Panel: Created separately as a standalone React app for better security and dashboard structure. Admin can add/edit/remove products and manage the art inventory.
-Backend API: Built using Node.js + Express.js, handling product CRUD, customization data, and user submissions.
-Database: Uses MongoDB Atlas for fast and scalable NoSQL storage. Data includes products, users, orders, and custom requests.
-Cloudinary: Integrated to handle high-quality image uploads and metadata — letting artists store and load media efficiently.
-Environment variables (like DB URI and API keys) are secured using .env.
-Authentication is currently basic and form-based — set to be upgraded to JWT tokens.
-Testing is ongoing, with plans to deploy via Render for both backend and static frontend.
-Implemented secure JWT-based authentication for both users and admin
-Added payment gateway integration using Stripe
-Integrate a lightweight NLP model for personalized art recommendations
-Add admin-side analytics and order tracking

## 📄 License

This project is a personal showcase and learning endeavor by Sania Golhar.  
All rights are reserved © 2025.  
The code and design are not intended for reuse or redistribution.  
You may view or explore the project for inspiration or educational purposes only.

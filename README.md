# Golhars
Golhars is a personalized E-commerce platform designed and developed to showcase, promote, and sell my original handmade paintings. It represents the fusion of my artistic identity and technical skills, bringing together the vibrant world of visual art with modern web technology.

This project is more than just an online store — it's a digital gallery, a creative brand, and a self-built platform for turning passion into purpose. Every feature is thoughtfully designed to reflect the uniqueness of handcrafted work and to provide a smooth, customizable experience for buyers.

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

<p align="left"> <!-- Frontend --> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/> <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/> <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React.js"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/> <img src="https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/> <img src="https://img.shields.io/badge/React%20Router-D0021B?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router"/> <!-- Backend --> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/> <img src="https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas"/> <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/> <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary"/> <img src="https://img.shields.io/badge/JWT%20Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT Auth"/> <img src="https://img.shields.io/badge/REST%20API-FF6F00?style=for-the-badge&logo=fastapi&logoColor=white" alt="REST API"/> <img src="https://img.shields.io/badge/.ENV-F8D866?style=for-the-badge&logo=dotenv&logoColor=black" alt=".env"/><img src="https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white" alt="Razorpay"/> </p>

### 🛠️ Tools & Services
- **VS Code** for development
- **Git** and **GitHub** for version control
- **Vercel** for deployment (Frontend)
- **Render** for deployment (Node.js and static hosting)(Backend)

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

# VitaFresh E-commerce Platform 🚀

## 📌 Project Overview

- VitaFresh is a Node.js-based e-commerce platform specializing in fresh produce and grocery items, such as fresh vegetables, fruits, and leafy greens.
  
- Built with Express.js, MongoDB, and EJS templating, it offers a seamless shopping experience with features like product filtering, user authentication, a shopping cart, and an admin dashboard.
  
- The platform emphasizes quality by highlighting organic products, seasonal specials, and promotional deals.
  
- Uses FastAPI as a high-performance backend for Chatbot.


## 📈 Highlights

- ✅ Fully responsive across all devices

- ⚡ Light/Dark mode support

- 🔍 Neumorphic or minimal aesthetic

- 🧠 Voice-enabled search or support

- 💻 Micro-interactions (hover, transitions)

- ✨ Accessibility compliance

- 📊 Admin panel (CRUD for products)

- 🛒 Cart and wishlist functionality

- 🧑‍🌾 User login/signup

- 💳 Checkout process with dummy payment flow


## 🛠️ Tech Stack
- Backend: Node.js, Express.js, MongoDB (Mongoose), FastAPI (for admin operations),python

- Frontend: EJS Templating, Tailwind CSS

- Libraries: bcrypt, bcryptjs, cookie-parser, cors, dotenv, ejs, express, express-ejs-layouts, express-session, jsonwebtoken, method-override, mongoose, nodemon

- Data: Self-created dataset tailored to the website's requirements.(/init/data.js)

- Authentication: JWT, bcrypt (user data stored in MongoDB)

- Chatbot: Gemini 1.5 (LLM for text/voice support)

- Architecture: MVC (Model-View-Controller)


## 🔬 Features
1. Product Catalog: Browse products by categories (Fresh Vegetables, Fresh Fruits, Leafy Greens, etc.) with details like organic status, origin, pricing, and availability.

2. User Authentication: Secure login/sign-up using JWT and bcrypt, with all user data stored in MongoDB.

3. Shopping Cart & Wishlist: Add products to cart or wishlist for easy access during checkout.

4. Order Processing & Checkout: Complete purchases with order data stored in MongoDB.

5. Product Search & Filtering: Search and filter products based on categories, price, or organic status.
   
6. Customer Support: Chatbot integration (powered by Gemini 1.5) with text and voice input options.

7. Admin Dashboard: Manage products (add/edit/delete), update categories, pricing, and availability.

8. Product Recommendations: Highlights for seasonal specials and organic products.

9. Responsive Design: Built with Tailwind CSS for a mobile-friendly experience.

## 📦 Architecture

VitaFresh follows an MVC (Model-View-Controller) architecture for a clean separation of concerns. Below is the overall architecture flow:

1. **User → Home Page**:
   - Login/Sign-up Page → MongoDB (stores user data)
   - Returns to: Home Page
   - Product Catalog → Product Search & Filtering → MongoDB (stores product data)
   - Shopping Cart → Wishlist → Order Processing & Checkout → MongoDB (stores order data)
     
2. **CFrontend → Home Page**:
   - EJS Templating (renders views)
   - Tailwind CSS (responsive design)
   - Renders: Product Catalog, Shopping Cart, Wishlist, Order Processing & Checkout
     
3. **Backend → Express.js (routing and logic)**:
   - RESTful API Endpoints (manages products/orders).
   - MongoDB/Mongoose (data storage for users, products, orders).
   - JWT & bcrypt (user authentication).
   
5. **Data Flow**:
   - Frontend (EJS, Tailwind CSS) → Backend (Express.js, RESTful APIs) → MongoDB (stores all data).

## 🧱 Setting Up Your Development Environment

1. **Install Git**:
   - Download and install Git from [git-scm.com](https://git-scm.com/).
  
2. **Install Node.js**:
   - Download and install Node.js from [www.node.js.com](https://nodejs.org/en/download).

2. **Clone the Repository**:
   ```bash
   [git clone https://github.com/VenkataSatya05/Vegetables-Fruits-Website.git]
   
3. **Install Dependencies**:
   - Navigate to the project directory and install required libraries:
   ```bash
   npm install bcrypt, bcryptjs, cookie-parser, cors, dotenv, ejs, express, express-ejs-layouts, express-session, jsonwebtoken, method-override, mongoose, nodemon

4. **Set Up Environment Variables Create a .env file in the root directory and add the following**:
   - Execute the server script to start listening for client connections:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   PORT=3000
   
5. **Run the Application**:
   - On terminal, first load the data(data.js) to MongoDb and execute the client script to connect to the server:
   ```bash
   node init/index.js
   node app.js
   
 ```- On antother terminal,To run Chatbot(FastApi) to connect  :
   ```
    uvicorn app:app --host 0.0.0.0 --port 8000





## 🧠 Remember

- Ensure the You installed Nodejs.
- Use the correct IP address and ports (8000) while connecting chatbot backend.
- A microphone are required for audio functionality.
- The server and client must be on the same network for local testing.



  



  



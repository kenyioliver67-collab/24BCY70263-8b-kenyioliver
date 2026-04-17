# 🏦 Banking API (Node.js + Express + MongoDB)

A secure and scalable backend API for a basic banking system built using Node.js, Express, and MongoDB.
This project demonstrates authentication, authorization, rate limiting, and core banking operations like deposit and withdrawal.

---

## 🚀 Features

* 🔐 User Authentication using JWT (JSON Web Token)
* 📝 User Registration & Login
* 🛡️ Protected Routes using Middleware
* 🚦 Rate Limiting (Prevents brute-force attacks & abuse)
* 💰 Deposit Money
* 💸 Withdraw Money
* 📊 Check Account Balance
* 🧾 Logging System (Request logs)
* ❗ Centralized Error Handling

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JWT (jsonwebtoken)
* **Security:** express-rate-limit
* **Environment Config:** dotenv

---

## 📁 Project Structure

```
├── config/
│   ├── db.js
│   └── logger.js
├── controllers/
│   ├── auth.controller.js
│   └── bank.controller.js
├── models/
│   └── user.model.js
├── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── logger.middleware.js
│   └── ratelimit.middleware.js
├── routes/
│   ├── auth.routes.js
│   └── bank.routes.js
├── logs/ (ignored by Git)
├── .env
├── .gitignore
├── index.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/banking-api.git
cd banking-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

---

### 🧑 Authentication Routes

#### ✅ Register User

```
POST /api/auth/register
```

**Request Body:**

```json
{
  "name": "John",
  "email": "john@test.com",
  "password": "123456"
}
```

---

#### 🔑 Login User

```
POST /api/auth/login
```

**Response:**

* Returns JWT Token

---

### 🔒 Protected Route

#### 👤 Get User Profile

```
GET /api/auth/profile
```

**Headers:**

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🏦 Banking Routes

---

#### 💰 Get Balance

```
GET /api/bank/balance
```

---

#### ➕ Deposit Money

```
POST /api/bank/deposit
```

**Request Body:**

```json
{
  "amount": 500
}
```

---

#### ➖ Withdraw Money

```
POST /api/bank/withdraw
```

**Request Body:**

```json
{
  "amount": 200
}
```

---

## 🚦 Rate Limiting

* Limits number of requests per IP
* Prevents:

  * Brute-force login attacks
  * API abuse
  * Server overload

---

## 🧪 Testing (Postman)

1. Register a new user
2. Login to get JWT token
3. Use token in headers:

```
Authorization: Bearer TOKEN
```

4. Test protected routes & banking APIs

---

## 🧠 Key Concepts Learned

* REST API design
* JWT Authentication flow
* Middleware in Express
* MongoDB schema & indexing
* Error handling in backend
* API security basics

---

## ⚠️ Important Notes

* ❌ Do NOT upload `.env` file to GitHub
* ✅ Always use unique emails when registering
* ⚠️ Ensure MongoDB is running before starting server

---

## 📈 Future Enhancements

* 📊 Transaction History
* 🔁 Transfer Money Between Users
* 🧾 Account Statements
* 👨‍💼 Admin Dashboard
* 🌐 Deployment (Render / Vercel)
* 📱 Frontend Integration (React)

---

## 👨‍💻 Author

**Kenyi Oliver James Wilson**
UID: 24BCY70263

---

## ⭐ Support

If you found this project helpful, please ⭐ the repository on GitHub!

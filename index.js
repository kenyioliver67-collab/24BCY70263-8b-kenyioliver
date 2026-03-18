require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const loggerMiddleware = require("./middleware/logger.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

// Connect database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/users", authRoutes);

// Base route (API Welcome Page)
app.get("/", (req, res) => {
    res.send(`
    <html>
    <head>
        <title>JWT Banking API</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f6f8;
                margin: 0;
                padding: 40px;
                color: #333;
            }
            .container {
                max-width: 800px;
                margin: auto;
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            h1 { color: #2c3e50; }
            h2 { margin-top: 30px; color: #34495e; }
            .endpoint {
                background: #f1f3f5;
                padding: 10px;
                margin: 10px 0;
                border-radius: 6px;
                font-family: monospace;
            }
            .method {
                font-weight: bold;
                color: #0077cc;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>JWT Banking API Authentication</h1>

            <p>
            Secure authentication system using Node.js, Express, MongoDB, and JWT.
            </p>

            <h2>Available API Endpoints</h2>

            <div class="endpoint">
                <span class="method">POST</span> /users/register
                <br>Register a new user
            </div>

            <div class="endpoint">
                <span class="method">POST</span> /users/login
                <br>Login and receive JWT token
            </div>

            <div class="endpoint">
                <span class="method">GET</span> /users/me
                <br>Get current logged-in user (Protected)
            </div>

            <h2>Testing</h2>

            <p>
            Use Postman or any API client to test endpoints.
            <br>
            Base URL: <b>http://localhost:3000</b>
            </p>
        </div>
    </body>
    </html>
    `);
});

// Error handler (must be last)
app.use(errorMiddleware);

// Local server (only for development)
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export app for Vercel
module.exports = app;
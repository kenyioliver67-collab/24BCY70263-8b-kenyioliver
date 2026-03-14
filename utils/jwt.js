const jwt = require("jsonwebtoken");

function getJwtSecret() {

    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error("JWT_SECRET is not defined in .env file");
    }

    return secret;
}

function generateToken(userId) {

    const secret = getJwtSecret();

    const token = jwt.sign({ userId: userId },
        secret, { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    return token;
}

module.exports = {
    generateToken
};
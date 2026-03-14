const createError = require("http-errors");
const User = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

// Register User
exports.registerUser = async(req, res, next) => {
    try {
        const { fullName, email, password } = req.body;

        const user = await User.create({
            fullName,
            email,
            password,
        });

        res.status(201).json({
            message: "User registered successfully",
            data: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

// Login User
exports.loginUser = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            throw createError(401, "Invalid email or password");
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            throw createError(401, "Invalid email or password");
        }

        const token = generateToken(user._id);

        res.status(200).json({
            message: "Login successful",
            data: {
                token,
                id: user._id,
                fullName: user.fullName,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};

// Get Current User
exports.getCurrentUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            throw createError(404, "User not found");
        }

        res.status(200).json({
            message: "User fetched successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};
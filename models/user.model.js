const mongoose = require("mongoose");
const argon2 = require("argon2");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
}, { timestamps: true });

/* HASH PASSWORD */
userSchema.pre("save", async function() {

    if (!this.isModified("password")) {
        return;
    }

    this.password = await argon2.hash(this.password);

});

/* COMPARE PASSWORD */
userSchema.methods.comparePassword = async function(password) {
    return argon2.verify(this.password, password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
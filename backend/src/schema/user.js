import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username must be unique"],
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [30, "Username cannot exceed 30 characters"],
    match: [/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"]
  },
  avatar: {
    type: String,
  }
}, { timestamps: true }) // Automatically manage createdAt and updatedAt fields)

userSchema.pre('save', function saveUser(next) {
    const user = this; //this refers to the document being saved
    user.avatar = `https://robohash.org/${user.username}?size=200x200`;
    next();
})
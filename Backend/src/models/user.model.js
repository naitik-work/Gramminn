const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username is already taken."],
    required: [true, "User name is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    select: false //select false means that when we query the user model, the password field will not be returned by default. This is a security measure to prevent the password from being exposed in API responses or logs. If we want to include the password in a query, we can explicitly select it using .select("+password") in our query. 
  },
  email: {
    type: String,
    unique: [true, "Email already exists."],
    required: [true, "Email is required."],
  },
  bio: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "https://ik.imagekit.io/FASK13YW/defaultUserImg.webp",
  },

  //* 1 id= 12bytes//but mongo db ka, max doc size 16MB//-->solution: edge collection
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

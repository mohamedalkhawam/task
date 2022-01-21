const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  first_name: {
    type: String,
    required: [true, "Name is a required field"],
    trime: true,
    minlength: [3, "User name must have more than 3 characters"],
    maxlength: [20, "User name must have less or equal than 7 characters"],
  },
  last_name: {
    type: String,
    required: [true, "Name is a required field"],
    trime: true,
    minlength: [3, "User name must have more than 3 characters"],
    maxlength: [20, "User name must have less or equal than 7 characters"],
  },
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Email is a required field"],
    trime: true,
    lowercase: true,
    validate: [validator.isEmail, "Email must be a valid email"],
  },
});

userSchema.pre("save", function (next) {
  console.log(`query took ${Date.now() - this.start} milliseconds!`);
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;

const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "name is missing"] },
  email: {
    type: String,
    required: [true, "email is missing"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: { type: String, required: [true, "password is missing"] },
});

const User = mongoose.model("user", userSchema);

module.exports = User;

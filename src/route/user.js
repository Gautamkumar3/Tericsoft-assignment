const express = require("express");
const {
  registerUser,
  userLogin,
  getProfile,
  logoutUser,
} = require("../controller/user");
const AuthMiddleware = require("../middleware/Authmiddleware");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", userLogin);
userRouter.get("/get_profile", AuthMiddleware, getProfile);
userRouter.post("/logout", AuthMiddleware, logoutUser);

module.exports = userRouter;

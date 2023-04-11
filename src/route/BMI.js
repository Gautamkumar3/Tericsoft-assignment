const express = require("express")
const { calculateBMI } = require("../controller/BMI");
const AuthMiddleware = require("../middleware/Authmiddleware");

const bmiRouter = express.Router()


bmiRouter.post("/calculate_bmi",AuthMiddleware, calculateBMI)

module.exports = bmiRouter;
const express = require("express");
const { calculateBMI, getCalculationHistory } = require("../controller/BMI");
const AuthMiddleware = require("../middleware/Authmiddleware");

const bmiRouter = express.Router();

bmiRouter.post("/calculate_bmi", AuthMiddleware, calculateBMI);
bmiRouter.get("/history", AuthMiddleware, getCalculationHistory);

module.exports = bmiRouter;

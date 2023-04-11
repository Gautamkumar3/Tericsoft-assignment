const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema(
  {
    height: { type: Number, required: [true, "Height is required"] },
    weight: { type: Number, required: [true, "Weight is missing"] },
    bmi_val: { type: String },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const BMI = mongoose.model("bmi", bmiSchema);

module.exports = BMI;

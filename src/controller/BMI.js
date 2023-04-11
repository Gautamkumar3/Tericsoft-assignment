const bmiModal = require("../modal/BMI");

const calculateBMI = async (req, res) => {
  const { height, weight } = req.body;
  const user_id = req.userId;

  if (!height || !weight) {
    return res
      .status(400)
      .send({ status: "error", message: "Height or Weight is missing" });
  }
  try {
    let heightInMeter = height * 0.3048;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    bmi_val = bmi + " kg/m²";
    let bmiValue = new bmiModal({ ...req.body, bmi_val, user_id });
    await bmiValue.save();
    res.status(200).send({
      status: "success",
      message: "BMI value get successfully",
      data: bmiValue,
    });
  } catch (er) {
    return res.status(500).send({ status: "error", message: er.message });
  }
};

const getCalculationHistory = async (req, res) => {
  const user_id = req.userId;

  try {
    const historyData = await bmiModal.find({ user_id }, { bmi_val: 1 });

    res.status(200).send({
      status: "success",
      message: "Calculation history value get successfully",
      data: historyData,
    });
  } catch (er) {
    return res.status(500).send({ status: "error", message: er.message });
  }
};

module.exports = { calculateBMI, getCalculationHistory };

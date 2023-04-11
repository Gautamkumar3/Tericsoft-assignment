const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
});

const blackListToken = mongoose.model("blacklist", blackListTokenSchema);

module.exports = blackListToken;

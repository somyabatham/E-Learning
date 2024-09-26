const mongoose = require("mongoose");
const Registerschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  conpassword: {
    type: String,
    required: true,
  },
});

const Register = new mongoose.model("Table", Registerschema);

module.exports = Register;

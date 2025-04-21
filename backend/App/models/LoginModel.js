const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const LoginModel = mongoose.model('Login', LoginSchema);
module.exports = LoginModel;

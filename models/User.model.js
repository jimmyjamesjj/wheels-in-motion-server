const { Schema, model } = require("mongoose");

// user model with detials of the user
const userSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  sname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = model("User", userSchema);

module.exports = User;

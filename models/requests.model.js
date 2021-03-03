const { Schema, model } = require("mongoose");

// requests model with detials of the user requests
const requestSchema = new Schema({
  date: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required:true
  },
  User:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  Sportcar:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Sportcar'
  }
});

const Request = model("Request", requestSchema);

module.exports = Request;

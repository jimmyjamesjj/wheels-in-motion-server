const { Schema, model } = require("mongoose");

// requests model with detials of the user requests
const requestcarSchema = new Schema({
  date: {
    type: String,
    required:true
  },
  email:String,
  address: {
    type: String,
    required:true
  },
  User:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  Sportcar:{
    type:Schema.Types.ObjectId,
    ref:'Sportcar'
  }
});

const Requestcar = model("requestcar", requestcarSchema);

module.exports = Requestcar;

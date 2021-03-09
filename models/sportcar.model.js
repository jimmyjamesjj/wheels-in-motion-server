const { Schema, model } = require("mongoose");

// sportcar model with detials of the sport car
const sportcarSchema = new Schema({
  image:{type: String,
    },
  carName: {
    type: String,
    required:true
  },
  Transmission: {
    type: String,
    required:true
  },
  
  wheelDrive: {
    type: String,
    required:true
  },
  Horsepower: {type:String,
  required:true},

  insurance: {type:String,
    required:true},

  carModel:{type:Number,
      required:true},
  User:{type:Schema.Types.ObjectId,
    ref:'User'
  }
});

const Sportcar = model("Sportcar", sportcarSchema);

module.exports = Sportcar;

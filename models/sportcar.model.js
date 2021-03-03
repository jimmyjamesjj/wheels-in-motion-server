const { Schema, model } = require("mongoose");

// sportcar model with detials of the sport car
const sportcarSchema = new Schema({
  carName: {
    type: String,
    required:true
  },
  Tansmission: {
    type: String,
    required:true
  },
  
  wheelDrive: {
    type: String,
    required:true
  },
  Horsepower: {type:String,
  required:true},

  insuranced: {type:Boolean,
    required:true},

  Model:{type:Number,
      required:true},
  User:{type:Schema.Types.ObjectId,
    ref:'User'
  }
});

const Sportcar = model("Sportcar", sportcarSchema);

module.exports = Sportcar;

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let mobileSchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
    },
    processor: {
      type: String,
    },
    memory: {
      type: String,
    },
    os: {
      type: String,
    },
  },
  { timestamps: true }
);

let Mobile = mongoose.model("mobiles", mobileSchema);
module.exports = Mobile;

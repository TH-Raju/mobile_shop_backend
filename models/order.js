let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let orderSchema = new Schema(
  {
    name: {
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

let Order = mongoose.model("orders", orderSchema);
module.exports = Order;

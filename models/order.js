let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let orderSchema = new Schema(
  {
    name: {
      type: String,
    },
    productName: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

let Order = mongoose.model("orders", orderSchema);
module.exports = Order;

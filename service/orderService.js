const Order = require("../models/order");

const addOrder = async function (data) {
  const result = Order.create(data);
  return result;
};

const getAllOrder = async function () {
  const result = Order.find({});
  return result;
};

const deleteOrder = async function (id) {
  const result = Order.deleteOne({ _id: id });
  return result;
};




const orderService = {
    addOrder,
  getAllOrder,
  deleteOrder,
};

module.exports = orderService;

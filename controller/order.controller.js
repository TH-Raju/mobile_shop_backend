const orderService = require("../service/orderService");

async function addOrders(req, res) {
  try {
    const addOrder = await orderService.addOrder(req.body);
    let data = {
      success: true,
      status: 200,
      data: addOrder,
    };

    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

async function getAllOrder(req, res) {
  const allOrder = await orderService.getAllOrder();
  let data = {
    success: true,
    status: 200,
    data: allOrder,
  };

  res.send(data);
}

async function deleteOrder(req, res) {
  let id = req.params.id;
  let OrderDelete = await orderService.deleteOrder(id);

  let data = {
    success: true,
    status: 200,
    data: OrderDelete,
  };

  res.send(data);
}

const orderController = {
  addOrders,
  getAllOrder,
  deleteOrder,
};

module.exports = orderController;

const express = require("express");
const orderController = require("../controller/order.controller");
const router = express.Router();

router.post("/add", orderController.addOrders);
router.get("/", orderController.getAllOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;

const express = require("express");
const app = express();
const json = require("express").json;
const cors = require("cors");
const userRouter = require("./route/user.route");
const mobileRouter = require("./route/mobile.route");
const orderRouter = require("./route/order.route");

const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

app.use(cors(corsConfig));
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRouter);
app.use("/api/v1/mobile", mobileRouter);
app.use("/api/v1/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.get("*", (req, res) => {
  res.status("No Route Found");
});

module.exports = app;

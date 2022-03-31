const express = require("express");
const route = express.Router();

const listProduct = require("./productRoute");

route.get("/", (req, res) => {
  res.json("Database Product");
});

route.use("/product", listProduct);

module.exports = route;

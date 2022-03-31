const express = require("express");
const route = express.Router();

const {
  getAllProduct,
  getProductByID,
  postProduct,
} = require("../controllers/productController");

route.get("/", getAllProduct);
route.get("/:id", getProductByID);
route.post("/", postProduct);

module.exports = route;

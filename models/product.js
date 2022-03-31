const mongoose = require("mongoose");
const { Schema } = mongoose;

const listProduct = new Schema({
  list: Number,
  title: String,
  cover: String,
  summary: String,
  bookmarked: String,
  likes: Number,
});

const product = mongoose.model("product", listProduct);

module.exports = product;

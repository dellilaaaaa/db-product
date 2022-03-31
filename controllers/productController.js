const dataProduct = require("../models/product");

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      const list = await dataProduct.find({}, "-__v");
      res.json(list);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  getProductByID: async (req, res) => {
    try {
      const { id } = req.params;
      const oneProduct = await dataProduct.findById({}, "__v");
      res.json(oneProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  postProduct: async (req, res) => {
    try {
      let newProduct = req.body;
      await dataProduct.create(newProduct);
      res.json("new product has been create");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },
};

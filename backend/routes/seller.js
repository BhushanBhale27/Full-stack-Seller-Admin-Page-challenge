const express = require("express");

const router = express.Router();

const controllers = require("../controllers/products");

router.get("/", controllers.getProducts);

router.post("/create", controllers.addProduct);

router.put("/edit/:id", controllers.editProduct);

router.delete("/delete/:id", controllers.deleteProduct);


module.exports = router
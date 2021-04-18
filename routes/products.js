const express = require("express");
const router = express.Router();
const ProductModal = require('../models/products')

router.post("/add", function (req, res) {
    const products = new ProductModal(req.body);
    console.log(products);

    products.save(function (err) {
        if (err) {
            console.log("error", err);
            res.status(404).send({ "message": err })
        }
        else {
            console.log("Product data added successfully.");
            res.status(200).send({ "result": "success" })
        }
    })
})

router.get("/getAll", function(req,res){
    ProductModal.find({}, { _id: 0, __v: 0 }, function(err, data){
        if(err){
            console.log("error", err);
        }
        else{
            console.log("Quotes data retrieved successfully.")
            res.status(200).send(data);
        }
    })
})

//export module
module.exports = router;
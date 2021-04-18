const express = require("express");
const router = express.Router();
const QuoteModal = require('../models/quotes')

//store data using post method
router.post("/add", function (req, res) {
    const quotes = new QuoteModal(req.body);
    console.log(quotes);

    quotes.save(function (err) {
        if (err) {
            console.log("error", err);
            res.status(404).send({ "message": err })
        }
        else {
            console.log("Quote added successfully.");
            res.status(200).send({ "result": "Success" })
        }
    })
})

//get data get method
router.get("/getAll", function(req,res){
    QuoteModal.find({}, { _id: 0, __v: 0 }, function(err, data){
        if(err){
            console.log("error", err);
        }
        else{
            console.log("Quotes data retrieved successfully.")
            res.status(200).send(data)
        }
    })
})

//export module
module.exports = router;
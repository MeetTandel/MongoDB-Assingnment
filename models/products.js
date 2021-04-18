const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
    {
        "productName": String,
        "price": Number
    },
    {
        "collection": "ProductsData"
    }
);

//export module
module.exports = mongoose.model('ProductsData', ProductsSchema)
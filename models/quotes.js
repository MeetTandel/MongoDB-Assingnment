const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a Schema
const QuotesSchema = new Schema(
    {
        "quote": String,
        "author": String
    },
    {
        "collection": "QuotesData"
    }
);

//export module
module.exports = mongoose.model('QuotesData', QuotesSchema)
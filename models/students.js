const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a Schema
const StudentsSchema = new Schema(
    {
        "studentFirstName": String,
        "collegeName": String,
        "location": String
    },
    {
        "collection": "StudentsData"
    }
);

//export module
module.exports = mongoose.model('StudentsData', StudentsSchema)
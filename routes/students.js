const express = require("express");
const router = express.Router();
const StudentModal = require('../models/students');

//store data using post method
router.post("/add", function (req, res) {
    console.log(req.body);
    const studentInfo = new StudentModal(req.body);
    console.log(studentInfo, StudentModal);

    studentInfo.save(function (err) {
        if (err) {
            console.log("error", err);
            res.send({ "message": err })
        }
        else {
            console.log("Students data added successfully.");
            res.send({ "result": "Success" })
        }
    })
})

//get data using get method
router.get("/getStudentDetails", function (req, res) {
    const name = req.query.name;
    StudentModal.find({ studentFirstName: name }, { _id: 0, __v: 0 }, function (err, data) {
        if (err) {
            console.log("error", err);
        } else {
            console.log(data);
            res.send({ results: data });
        }
    });
});

//export module
module.exports = router;
const mongoose = require('mongoose');

const FacultySchema = mongoose.Schema({
    "_id" : String,
    "FacultyName" : String,
    "Address" :{
        "Street":String,
        "City": String,
        "ZipCode":String
    }
});

module.exports = mongoose.model('Faculty',FacultySchema,'Faculty');

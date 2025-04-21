const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  "FirstName" : String,
  "lastName" : String,
  "IsFired" : Boolean,
  "FacultyID": {type:String, ref:'Faculty'},
  "Courses" : [{
    "CourseID":{type:String , ref:'Course',required: true }
    }],
  "grade" : Number
});

module.exports = mongoose.model('Student',StudentSchema,'Student');

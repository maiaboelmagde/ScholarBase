const mongoose = require('../DB').mongoose;
require('../models/Faculty');
require('../models/Course'); //even it's ok to require them at server.ja

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

const mongoose = require('../DB').mongoose;

const Coursechema = new mongoose.Schema({
  "_id": String,
  "CourseName": String,
  "FinalMark": Number
});

module.exports = mongoose.model('Course', Coursechema, 'Course');

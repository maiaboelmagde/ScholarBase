const express = require('express');
const router = express.Router();
const StudentController = require('../Controllers/student.controllers');

router.get('/',StudentController.GetAllStudents);

module.exports= router;

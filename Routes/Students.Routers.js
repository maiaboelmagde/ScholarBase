const express = require('express');
const router = express.Router();
const StudentController = require('../Controllers/student.controllers');

router.get('/',StudentController.GetAllStudents);
router.get('/add',StudentController.GetAddStudent);
router.post('/add',StudentController.AddStudent);
router.delete('/:id',StudentController.DeleteStudent);
module.exports= router;

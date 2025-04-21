const express = require('express');
const router = express.Router();
const CoursesController = require('../Controllers/course.controller');

router.get("/", CoursesController.getAllCourses);

module.exports = router;

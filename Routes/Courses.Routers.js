const express = require('express');
const router = express.Router();
const CoursesController = require('../Controllers/course.controller');

router.get("/", CoursesController.getAllCourses);
router.get("/add",CoursesController.getAddCourse);
router.post("/add",CoursesController.addCourse);

module.exports = router;

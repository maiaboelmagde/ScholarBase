const Course = require('../models/Course');
const Student = require('../models/Student');

const getAllCourses = async (req, res) => {
    try {
      const allCourses = await Course.find();
      res.render('Course.ejs', { allCourses });
    } catch (error) {
      res.status(500).send('Error getting Courses');
    }
};

const getAddCourse = (req,res)=>{
  res.render('addNewCourse.ejs');
}

const addCourse = async(req,res)=>{
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.redirect("/Courses");
}
/*
const deleteCourse = async(req,res)=>{
  try {
    const courseID = req.params.id;
    await Course.findByIdAndDelete(courseID);
    res.status(200).json({message:'Course deleted successfully ..'});
  } catch (error) {
    console.log("Error deleting Course:",error);
    res.status(500).send("Server Error");
  }
}
*/
const deleteCourse = async (req, res) => {
  try {
    const courseID = req.params.id;

    const studentUsingCourse = await Student.findOne({ 'Courses.CourseID': courseID });
    if (studentUsingCourse) {
      return res.status(400).json({ message: "Cannot delete this course; it is still assigned to students." });
    }

    const deletedCourse = await Course.findByIdAndDelete(courseID);
    if (!deletedCourse) {
      console.log("No course found with this ID.");
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: 'Course deleted successfully ..' });
  } catch (error) {
    console.log("Error deleting Course:", error);
    res.status(500).send("Server Error");
  }
};
module.exports = {
    getAllCourses,
    getAddCourse,
    addCourse,
    deleteCourse
}

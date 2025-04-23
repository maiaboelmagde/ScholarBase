const Course = require('../models/Course');

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

module.exports = {
    getAllCourses,
    getAddCourse,
    addCourse
}

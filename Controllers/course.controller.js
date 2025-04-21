const Course = require('../models/Course');

const getAllCourses = async (req, res) => {
    try {
      const allCourses = await Course.find();
      res.render('Course.ejs', { allCourses });
    } catch (error) {
      res.status(500).send('Error getting Courses');
    }
};

module.exports = {
    getAllCourses,
}
const Students = require('../models/Student');

const GetAllStudents = async(req, res)=>{
    try {
        const allStudents = await Students.find().populate("FacultyID").populate("Courses.CourseID");
        res.render('Student.ejs', { allStudents });
    } catch (error) {
        console.error("Error while getting students:", error);
        res.status(500).send('Error getting Students');
    }
};

module.exports = {
    GetAllStudents
}

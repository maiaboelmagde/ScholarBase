const Students = require('../models/Student');
const Faculties = require('../models/Faculty');
const Courses = require('../models/Course');


const GetAllStudents = async(req, res)=>{
    try {
        const allStudents = await Students.find().populate("FacultyID").populate("Courses.CourseID");
        res.render('Student.ejs', { allStudents });
    } catch (error) {
        console.error("Error while getting students:", error);
        res.status(500).send('Error getting Students');
    }
};

const GetAddStudent= async(req,res)=>{
    const FacultiesList = await Faculties.find();
    const CoursesList = await Courses.find();
    res.status(200).render('addNewStudent.ejs',{Faculties:FacultiesList, Courses:CoursesList});
}

const AddStudent = async(req,res)=>{
    const courseIDs = Array.isArray(req.body.Courses)
    ? req.body.Courses
    : [req.body.Courses];
  
    const formattedCourses = courseIDs.map(id => ({ CourseID: id }));
  
    const newStudent = new Students({
        ...req.body,
        Courses: formattedCourses
    });


    await newStudent.save();
    res.redirect('/Students');
}
module.exports = {
    GetAllStudents,
    GetAddStudent,
    AddStudent
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 7500;
const StudentRouter = require('./Routes/Students.Routers');
const CoursesRouter = require('./Routes/Courses.Routers');
const FacultyRouter = require('./Routes/Faculties.Routers');

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


require('./DB').DBListener.once('open', () => {
    console.log("Connected Successfully");

    app.use('/Students',StudentRouter);
    app.use('/Courses',CoursesRouter);
    app.use(['/Faculties', 'Faculty'],FacultyRouter);

});

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});
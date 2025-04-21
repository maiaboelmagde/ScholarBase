const Faculties = require('../models/Faculty');

const getAllFaculties = async(req,res)=>{
    try{
      const allFaculties = await Faculties.find();
      res.render("Faculty.ejs",{allFaculties});
    }catch(error){
      res.status(500).send("Error while getting Faculties...");
    }
};

module.exports={
    getAllFaculties,
}
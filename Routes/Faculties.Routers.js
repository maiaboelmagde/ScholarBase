const express = require('express');
const router = express.Router();

const FacultiesController = require('../Controllers/Faculty.controllers');

router.get("/", FacultiesController.getAllFaculties);

module.exports = router;
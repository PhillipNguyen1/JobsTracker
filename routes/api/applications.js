const express = require("express");
const router = express.Router();

// Application Model
const Application = require("../../models/application.model");

// @route   GET api/applications
// @desc    Get all applications (no sorting)
// @access  Public
router.get("/", async (req, res) => { 
  try{
    const apps = await Application.find();
    res.json(apps);
  }catch(err){
    console.error(err);
  }
});

// @route   GET api/applications/:id
// @desc    Get an application by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    res.json(app);
  } catch (err) {
    console.error(err);
  }
});

// @route   POST api/applications
// @desc    Create an application
// @access  Public
router.post("/", async (req, res) => {
  // Create new application by taking data from the json request
  try {
    const newApplication = new Application({
      companyName: req.body.companyName,
      applicationDate: req.body.applicationDate,
      position: req.body.position,
      location: req.body.location,
      salary: req.body.salary,
      status: req.body.status,
      response: req.body.response,
      portalLink: req.body.portalLink,
      howFar: req.body.howFar,
      JobBoard: req.body.JobBoard
    });

    res.json(await newApplication.save()); // Save new application to database
  } catch (err) {
    console.error(err);
  }
});

// @route   UPDATE api/applications/:id
// @desc    UPDATE an application by id
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (app == null) {
      console.log("Application not inside database");
    } else {
      await app.update(req.body);
      res.json("Application has been updated");
    }
  } catch (err) {
    res.status(404).json("Could not find application with that ID");
  }
});

// @route   DELETE api/applications/:id
// @desc    Delete an application by id
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (app == null) {
      // If no application found with given id, return error
      console.log("Application not inside database");
      res.json({ success: false });
    } // If app is found, delete it from the database
    else res.json(await app.delete());
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

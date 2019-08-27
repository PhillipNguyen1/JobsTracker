const express = require("express");
const router = express.Router();

// Application Model
const Application = require("../../models/application.model");

// @route   GET api/applications
// @desc    Get all applications
// @access  Public
router.get("/", (req, res) => {
  Application.find()
    .sort({ companyName: 1 }) // Sorts company name in alphabetical order
    .then(app => res.json(app));
});

// @route   GET api/applications/:id
// @desc    Get an application by id
// @access  Public
router.get("/:id", (req, res) => {
  Application.findById(req.params.id).then(app => res.json(app));
});

// @route   POST api/applications
// @desc    Create an application
// @access  Public
router.post("/", (req, res) => {
  // Create new application by taking data from the json request
  const newApplication = new Application({
    companyName: req.body.companyName,
    applicationDate: req.body.applicationDate,
    position: req.body.position,
    location: req.body.location,
    salary: req.body.salary,
    status: req.body.status,
    portalLink: req.body.portalLink
  });

  // Save new application to database
  newApplication.save().then(app => res.json(app));
});

// @route   UPDATE api/applications/:id
// @desc    UPDATE an application by id
// @access  Public
router.put("/:id", (req, res) => {
  Application.findById(req.params.id)
    .then(app => app.update(req.body).then(data => res.json("Application updated")))  // Updates application with the fields passed in the request body
    .catch(err => res.status(404).json("Could not find application with that ID"));   // If no application found with given id, return error
});

// @route   DELETE api/applications/:id
// @desc    Delete an application by id
// @access  Public
router.delete("/:id", (req, res) => {
  Application.findById(req.params.id)
    .then(app => app.remove().then(() => res.json({ app, success: true })))   // Removes application by id
    .catch(err => res.status(404).json({ success: false }));                  // If no application found with given id, return error
});

module.exports = router;

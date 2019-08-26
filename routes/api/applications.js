const express = require("express");
const router = express.Router();

// Application Model
const Application = require("../../models/application.model");

/*
  TODO:
    - Implement router.update()
*/

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
    position: req.body.position,
    area: req.body.area,
    salary: req.body.salary,
    status: req.body.status
  });

  // Save new application to database and
  // backend responds with the new application
  newApplication.save().then(app => res.json(app));
});

// @route   DELETE api/applications/:id
// @desc    Delete an application by id
// @access  Public
router.delete("/:id", (req, res) => {
  // Find by id & remove from database
  // If application does not exist, return 404
  Application.findById(req.params.id)
    .then(app => app.remove().then(() => res.json({ app, success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

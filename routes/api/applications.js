const express = require("express");
const router = express.Router();

// Application Model
const Application = require("../../models/application");

// @route   GET api/applications
// @desc    Get all applications
// @access  Public
router.get("/", (req, res) => {
  Application.find()
    .sort({ companyName: 1 })
    .then(data => res.json(data));
});

module.exports = router;

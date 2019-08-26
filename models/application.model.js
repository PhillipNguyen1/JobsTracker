const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ApplicationSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  applicationDate: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  location: {
    type: String
  }, 
  salary: {
    type: Number
  },
  status: {
    type: String,
    required: true
  },
  portalLink: {
    type: String
  },
});

module.exports = Application = mongoose.model('application', ApplicationSchema);
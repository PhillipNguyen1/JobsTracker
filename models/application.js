const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ApplicationSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  area: {
    type: String
  }, 
  salary: {
    type: Number
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = Application = mongoose.model('application', ApplicationSchema);
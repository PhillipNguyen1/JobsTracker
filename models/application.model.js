const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  response: {
    type: String
  },
  howFar:{
    type: String
  },
  JobBoard:{
    type: String
  }
});

module.exports = Application = mongoose.model('application', ApplicationSchema);
const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const applications = require('./routes/api/applications');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connected to database ${db}`))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/applications', applications);


app.listen(PORT, function() {
  console.log(`Server is running on PORT: ${PORT}`);
});
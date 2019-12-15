const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const applications = require('./routes/api/applications');

const passport = require("passport");
const users = require("./routes/api/users");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connected to database ${db}`))
  .catch(err => console.log(err));

// Application Routes
app.use('/api/applications', applications);

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
// Login routes
app.use("/api/users", users);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
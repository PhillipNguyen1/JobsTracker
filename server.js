const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const applications = require('./routes/api/applications');
const users = require("./routes/api/users");
const passport = require("passport");
const db = require('./config/keys').mongoURI;

require("./config/passport")(passport);

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(passport.initialize());

app.use('/api/applications', applications);
app.use("/api/users", users);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connected to database ${db}`))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
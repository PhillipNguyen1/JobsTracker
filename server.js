const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('config');
const PORT = 4000;

const applications = require('./routes/api/applications');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/applications', applications);


app.listen(PORT, function() {
  console.log(`Server is running on PORT: ${PORT}`);
});

// mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true});
// const connection = mongoose.connection;

// connection.once('open', () =>{
//     console.log("Mongodb connection establised successfully");
// });
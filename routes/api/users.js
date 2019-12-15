const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/users.model");

// @route   GET api/applications
// @desc    Get all applications (no sorting)
// @access  Public
router.get("/", async (req, res) => {
  try {
    const apps = await User.find();
    res.json(apps);
  } catch (err) {
    console.error(err);
  }
});

// @route   GET api/applications/:id
// @desc    Get an application by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const app = await User.findById(req.params.id);
    res.json(app);
  } catch (err) {
    console.error(err);
  }
});

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          applications_id: user.applications_id
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 },
          (err, token) => {
            res.json({
              success: true,
              token: token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route   UPDATE api/users/:id
// @desc    UPDATE an application by id
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const userInfo = await User.findById(req.params.id);
    if (userInfo == null) {
      console.log("User not inside database");
    } else {
      console.log(req.body._id);
      userInfo.applications_id.push(req.body._id);
      await userInfo.updateOne(userInfo);
      res.json(userInfo);
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;

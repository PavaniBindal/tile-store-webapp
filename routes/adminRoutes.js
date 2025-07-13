const express = require("express");
const bcrypt = require("bcryptjs");

//adding the models
const Customer = require("../models/customer");
const Tile = require("../models/tile");
const Order = require("../models/order");
const Counter = require("../models/counter");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect('/login');
});

router.get("/login", (req, res) => {
  res.render("login", { error: null });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.render("login", { error: "User Not Found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render("login", { error: "Password is incorrect" });
  }
  res.redirect("/order-history");
});

router.get("/customers", (req, res) => {
  res.render("customers");
});

router.get("/inventory", (req, res) => {
  res.render("inventory");
});

router.get("/order-history", (req, res) => {
  res.render("order-history");
});

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const adminRoutes = require('./routes/adminRoutes');

const app = express();

//database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/tile-store")
  .then(() => console.log("Connected to database successfully"));

//Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/',adminRoutes);

app.listen(3000,()=>{
  console.log("Listening on port 3000");
});

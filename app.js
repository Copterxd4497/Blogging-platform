const express = require("express");

const path = require("path");
const homepageRoute = require("./routes/homepageRoute");
const createBlogRoute = require("./routes/createPageRoute");

const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homepageRoute);
app.use("/", createBlogRoute);

module.exports = app;

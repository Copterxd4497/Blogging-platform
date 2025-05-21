const express = require("express");

const path = require("path");
const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views");

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Path to your favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Define a route
app.get("/", (req, res) => {
  res.render("home", { name: "Copter" });
});

module.exports = app;

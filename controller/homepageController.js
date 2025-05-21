const Blog = require("../models/BlogModel");

// Define a route
exports.homepage = (req, res) => {
  res.status(200).render("home", { name: "Copter" });
};

const Blog = require('../models/BlogModel');

// Define a route
exports.homepage = (req, res) => {
    res.render('home', { name: 'Copter' });
  };
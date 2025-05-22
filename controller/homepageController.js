// Define a route
exports.homepage = (req, res) => {
  res.status(200).render("home", { name: "Copter" });
};

exports.blogPage = (req, res) => {
  res.status(200).render("blog");
};

// Define a route
exports.homepage = (req, res) => {
  res.status(200).render("home", { name: "Copter" });
};

console.log("hello world");

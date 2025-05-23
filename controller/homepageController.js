const Blog = require("./../models/BlogModel");

// Define a route
exports.homepage = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).render("home", { blogs });
  } catch (err) {
    res.status(500).render("error", { message: "Failed to load blogs." });
  }
};

exports.blogPage = async (req, res) => {
  const blog_id = req.params.content;
  const blog = await Blog.findById(blog_id);

  res.status(200).render("blog", { blog });
};

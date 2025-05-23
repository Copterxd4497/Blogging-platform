const Blog = require("./../models/BlogModel");

exports.createPage = (req, res) => {
  res.status(200).render("new");
};

exports.newBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const nweBlog = await Blog.create({
      title: title,
      author: author,
      content: content,
    });

    res.status(201).json({ message: "Blog created" });
  } catch (err) {
    res.status(500).render("error", { message: "Failed to load blogs." });
  }
};

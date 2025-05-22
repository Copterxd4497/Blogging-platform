const Blog = require("./../models/BlogModel");

exports.searchPage = async (req, res) => {
  try {
    const title = req.query.q;
    // const titleBlog = await Blog.findOne({ title: title });

    // if (!titleBlog) {
    //   return res.status(200).render("search", { message: title });
    // }

    // res.status(200).render("search");

    res.status(200).render("search", { message: title });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

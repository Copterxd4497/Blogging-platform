exports.explorePage = (req, res) => {
  const topic = req.params.topic;

  res.status(200).render("explore", { tag: topic });
};

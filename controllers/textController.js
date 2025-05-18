const catchAsync = require("./../utils/catchAsync");

exports.showPage = catchAsync(async (req, res) => {
  res.status(200).render("layout");
});

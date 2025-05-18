"use strict";

var catchAsync = require("./../utils/catchAsync");

exports.showPage = catchAsync(function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.status(200).render("layout");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
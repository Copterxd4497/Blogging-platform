"use strict";

var express = require("express");

var AppError = require("./utils/appError");

var path = require("path");

var favicon = require("serve-favicon");

var textRouter = require("./routes/textRouter");

var app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); // Serving static files

app.use(express["static"](path.join(__dirname, "public")));
app.use("/", textRouter);
module.exports = app;
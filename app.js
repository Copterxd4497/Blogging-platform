const express = require("express");

const AppError = require("./utils/appError");
const path = require("path");
const favicon = require("serve-favicon");

const textRouter = require("./routes/textRouter");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Path to your favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use("/", textRouter);

module.exports = app;

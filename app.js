/**
 * @file Express application
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

// Required modules
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("./config/default.json");

// Exporting Routes
var indexRouter = require("./routes/index");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var servicesRouter = require("./routes/services");

// Create express app
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Listing incomming requests on routes
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/services", servicesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the Not Found error page
  if (err.status == 404) {
    res.status(err.status);
    res.render("404", { title: "Page introuvable" });
  } else {
    // render all other error as Server Error (500)
    res.status(err.status || 500);
    res.render("error", { title: "Erreur 500" });
  }
});

module.exports = app;

// _-_-_-_-_-_-_-_-Required modules-_--_-_-_-_-_-_-_-_
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("./config/default.json");

// _-_-_-_-_-_-_-_-Exporting Routes-_--_-_-_-_-_-_-_-_
var indexRouter = require("./routes/index");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var servicesRouter = require("./routes/services");

// _-_-_-_-_-_-_-_-Create express app-_--_-_-_-_-_-_-_-_
var app = express();

// _-_-_-_-_-_-_-_-view engine setup-_--_-_-_-_-_-_-_-_
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// _-_-_-_-_-_-_-_-Middleware setup-_--_-_-_-_-_-_-_-_
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// _-_-_-_-_-_-_-_-Listing incomming requests on routes-_--_-_-_-_-_-_-_-_
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/services", servicesRouter);

// _-_-_-_-_-_-_-_-catch 404 and forward to error handler-_--_-_-_-_-_-_-_-_
app.use(function (req, res, next) {
  next(createError(404));
});

// _-_-_-_-_-_-_-_-error handler-_--_-_-_-_-_-_-_-_
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the Not Found error page
  if (err.status == 404) {
    res.status(err.status);
    res.render("404", { title: "Page introuvable" });
  } else {
    // render all other error
    res.status(err.status || 500);
    res.render("error", { title: "Erreur 500" });
  }
});

module.exports = app;

const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const usersRouter = require("./routes/usersRoute");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const app = express();

app.use(cors());
app.options("*", cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(helmet());
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});
app.use("/", limiter);
app.use(express.json({ limit: "20kb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(express.static(`${__dirname}/public`));
app.use(function (req, res, next) {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/task/api/users", usersRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);
module.exports = app;

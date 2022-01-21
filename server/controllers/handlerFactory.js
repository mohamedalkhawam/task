const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model, dataKey) =>
  catchAsync(async (req, res, next) => {
    const allData = await Model.find();
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const data = await features.query;
    const response = {
      status: "success",
      requestTime: req.requestTime,
      result: data.length,
      [dataKey ?? "data"]: data,
    };
    if (req.query.limit) {
      response.totalPages = Math.ceil(allData.length / Number(req.query.limit));
    }
    res.status(200).json(response);
  });
exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) {
      query.populate(popOptions);
    }
    const data = await query;
    if (!data) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      result: 1,
      data: data,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.create(req.body);
    console.log(req.requestTime);
    res.status(201).json({
      status: "success",
      data,
      requestTime: req.requestTime,
    });
  });
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data,
      requestTime: req.requestTime,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
      requestTime: req.requestTime,
    });
  });

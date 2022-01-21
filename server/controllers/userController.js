const User = require("../models/userModel");
const factory = require("./handlerFactory");
exports.getAllUsers = factory.getAll(User, "users");
exports.getOneUser = factory.getOne(User);
exports.createUser = factory.createOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

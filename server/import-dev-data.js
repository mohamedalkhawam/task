/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const fs = require("fs");
const User = require("./models/userModel");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
console.log(process.argv);

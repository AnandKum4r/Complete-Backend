//✅ Part4: MongoDB
// First install mongodb using command npm i mongoose
// Create new folder named as models
// Then create new file inside models
// ✅ Databse connections
// To connect with databse create new folder named config
// Then create a new file inside config

const mongoose = require("mongoose");

// creating user model
const userSchema = new mongoose.Schema({
  username: String, // name must be a string
  email: String, // email must be a string
  password: String, // password must be a string
  age: Number, // age must be a number
});

const userModel = mongoose.model("user", userSchema);

// exporting user.js file
module.exports = userModel;

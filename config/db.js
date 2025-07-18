const mongoose = require("mongoose");

// databse connection with local
const connection = mongoose
  .connect("mongodb://0.0.0.0/complete-backend")
  .then(() => {
    console.log("Connected with database");
  });

// exporting db.js file
module.exports = connection;

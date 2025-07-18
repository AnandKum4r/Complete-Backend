// ✅ Part3 : Express.js
// This is main file its like app.jsx in react
// Install express.js for creating server it is usefull for productions
// Use command npm i epxress in terminal

const express = require("express");
const morgan = require("morgan");
// here using express store in variable named app
// app. will be used to access express
const app = express();

// Importing user.js file for database
const userModel = require("./models/user");
// importing db.js file for database
const dbConnection = require("./config/db");

// // Custom Middleware
// app.use((req, res, next) => {
//   console.log("This is a middleware");
//   const a = 2;
//   const b = 3;
//   console.log(a + b);
//   return next();
// });

// Install morgan logger for middleware
// Use command npm i morgan
// This is a third party middleware
app.use(morgan("dev"));

// Built-in middlware for post method
app.use(express("dev"));

// This line will show users form details on submit in terminal in POST method
app.use(express.urlencoded({ extended: true }));

// This is for html file
app.set("view engine", "ejs");

// ✅ HTML File handling: Create a folder named as views
// Then create html file in views folder filename will be with ejs extension
// To Run html file on server, use render like below

// Routing through express.js
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/home", (req, res) => {
  res.send("Hi, I am Home Page from express.js server");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// ✅ CSS File handling : Create a folder named as public
// This below line means Serve static files from public folder
app.use(express.static("public"));
// public is the name of the folder it can be anything

// ✅ Form Handling
// first Render the form on GET method
app.get("/form-data", (req, res) => {
  res.render("form");
  //   res.send("Form Data Received");
});
// second Handle form submission on POST for secure submtion /get-form-data
app.post("/form-data", (req, res) => {
  console.log(req.body); // handle data
  res.send("Form Data Received");
});

// ✅ Databse handling
// Creating route for mongodb
app.get("/register", (req, res) => {
  res.render("register");
});
//Always use the same route like /register for both GET and POST is best practice
// ✅ CURD Operation
// ✅ Create Operation
// Create ke liye async-await use krna hai
app.post("/register", async (req, res) => {
  const { username, email, password, age } = req.body;

  await userModel.create({
    username: username,
    email: email,
    password: password,
    age: age,
  });
  console.log(req.body);
  res.send("User Registration Done");
});

// ✅ Read Operation
app.get("/get-users", (req, res) => {
  // // find() method to find all userdata
  // userModel
  //   .find({
  //     // to find users with specific condition
  //     username: "Anand",
  //   })
  //   .then((users) => {
  //     res.send(users);
  //   });

  // findOne() method to find one user only
  userModel
    .findOne({
      username: "Kartik",
    })
    .then((user) => {
      res.send(user);
    });
});

// ✅ Update Operation
// Update ke liye async-await use krna hai
app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    {
      username: "Prateek",
    },
    {
      email: "pk@gmail.com",
    }
  );
  res.send("User Updated");
});

// ✅ Delete Operation
// Delete ke liye async-await use krna hai
app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({
    username: "Abhi",
  });
  res.send("User Deleted");
});

app.listen(3000);

// To use html in express install ejs
// Use this command : npm i ejs

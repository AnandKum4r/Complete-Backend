// ✅ Part2 : Node.js
// Run command npm init -y it will create package.json file
const http = require("http");

// creating server with node.js
const server = http.createServer((req, res) => {
  // to see url of browser on which server is running(routing)
  //   console.log(req.url);

  // if any request comes on server by default response will be this
  //   res.end("Hi, this response is from server");

  // Routing in server: Now if want different response for each url then
  if (req.url == "/about") {
    res.end("The about page");
  }
  if (req.url == "/profile") {
    res.end("The profile page");
  }
  if (req.url == "/") {
    res.end("The home page");
  }
});
// http se server create krne pr baar baar if lagana padega esse btter hai express use kro

// package.json is complete description of the server

// baar baar terminal se server ko run na krna pade uske liye use kro nodemon given below cmd
// npx nodemon server.js

// to start the server
server.listen(3000);
// Now run on terminal using command node server.js to use this
// Open browser and type localhost:3000 it will show output

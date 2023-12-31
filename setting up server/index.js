// using http module (inbuilt given by node) we can setup a basic server

const http = require("http");
const PORT = 3000;

/**
 * HTTP module contains a function called as createServer
 * This createServer function takes a callback as the input
 *Now inside the callback , we get two arguments
 * - request -> This argument contains all the details about the incoming request
 * - response -> This argument contains functions using which we can prepare the response
 *
 *
 * The createServer function returns us the server object
 */

const server = http.createServer(function exec(request, response) {
  if (request.url === "/home") {
    response.end("Welcome to home");
  } else if (request.url === "/faq") {
    response.end("List of FAQs");
  } else {
    response.end("Hello world");
  }
});

server.listen(PORT, function process() {
  // once the server has started then this callback will be executed
  console.log("Server started on port", PORT);
});

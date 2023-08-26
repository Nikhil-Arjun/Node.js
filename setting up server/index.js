// using http module (inbuilt given by node) we can setup a basic server

const http = require("http");

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

const server = http.createServer(function exec(request, response) {});

server.listen(PORT);

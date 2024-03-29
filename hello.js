const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function (req, res) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body as "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const { name, add } = require("./nodejs");

//creating a server in express
const http = require("http");

// console.log(http);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(JSON.stringify({ course: "Acc" }));
    <br />;
    res.end("End");
  }
});
server.listen(5000);

//creating a server in express
console.log(name);
const result = add(2, 4);
console.log(result);

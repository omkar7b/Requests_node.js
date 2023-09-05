const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.headers);
  res.write('<html>');
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node.js Server</h1></body>")
  res.write('</html>')
  res.end()
})

server.listen(3000);
const http = require("http");
const cluster = require("cluster");
const port = 8080

if (cluster.isMaster) {
  const numCPUs = require("os").cpus().length;
  console.log("numCPUs", numCPUs);
  for (let i = 0; i < numCPUs - 1; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    console.log(`Worker died ${process.pid}`);
    cluster.fork();
  })
} else {
  const server = http.createServer();
  
  server.on("request", (req, res) => {
    
    res.end('Hello World!');
  });
  
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}. PID: ${process.pid}`);
  });

}
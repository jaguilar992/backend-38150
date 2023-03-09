const http = require("http"); // Puede remplazarse por express
const cluster = require("cluster");
const argv = process.argv.slice(2); // Array de argumentos de la linea de comandos
const port = argv.length > 0 ? argv[0] : 8080;

if (cluster.isMaster) {
  const numCPUs = require("os").cpus().length;
  console.log(`Worker maestro ejecuntadose con pid ${process.pid}. Server listening on ${port}`);

  for (let i = 0; i < numCPUs - 1; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    // console.log(`Worker died: ${process.pid}`);
    cluster.fork();
  });
} else {
  const pid = process.pid;
  const fecha = new Date(Date.now());
  const server = http.createServer();
  
  server.on("request", (req, res) => {
    res.end(`Servidor con pid(${pid}) - puerto (${port}) - fecha: ${fecha}`);
  });
  
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}. PID: ${process.pid}`);
  });
}
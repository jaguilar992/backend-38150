const express = require("express");
const cluster = require("cluster");
const {cpus} = require('os');
const cpuNum = cpus().length;

function isPrime(n) {
  if (n<=3)
    return n>1;
  if (n%2===0 || n%3===3)
    return false;
  for (let i=5; i*i <=n; i+=6) {
    if (n%i === 0 || n%(i+2) === 0 )
      return false;
  }
  return true;
}

const PORT = parseInt(process.argv[2]) || 8080;
const modoCluster = process.argv[3] === 'CLUSTER';

if (modoCluster && cluster.isPrimary) {
  console.log(`Cluster iniciado. CPUS: ${cpuNum}`);
  console.log(`PID: ${process.pid}`);
  for (let i = 0; i < cpuNum; i++) {
    cluster.fork();
  }

  cluster.on("exit", worker => {
    console.log(`${new Date().toLocaleString()}: Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();
  app.get("/", (req, res) => {
    const primes = [];
    const max = Number.parseInt(req.query.max) || 1000;
    for (let j=1; j<=max; j++) {
      if (isPrime(j))
        primes.push(j);
    }
    res.json(primes);
  });

  app.listen(PORT, () => {
    console.log(`PID: ${process.pid}. Servidor express escuchando en puerto ${PORT}`);
  });
}


// Comando artillery
// artillery quick --count 50 -n 40 "http://localhost:8080/?max=100000" > resultados_fork.txt

// Curl ejemplo
// curl -X GET "http://localhost:8080/?max=10000"


/// ###### Builtin profiler de Node
// Levantar el servidor para escuchar la actividad con el profiler encendido
// node --prof server.js

// Analizar los logs (Procesar el output del profiler)
// node --prof-process 
// node --prof-process isolate-0x140078000-81518-v8.log > resultados_node_p
// rofiler.txt


// Math.floor(Math.random() * 10)
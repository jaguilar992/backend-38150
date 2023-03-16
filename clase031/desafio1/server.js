const express = require("express");
const compression = require("compression")
const gzipMiddleware = compression();

const app = express();

function generarString() {
  return Array(1000).fill("Hola que tal").join("");
}

// Hola que talHola que talHola que talHola que tal...
const str = generarString();

app.get("/saludo", (req, res) => {
  res.send(str);
});

app.get("/saludozip", gzipMiddleware, (req, res) => {
  res.send(str);
});



app.listen(8080, () => {
  console.log("Ejecutando servidor... puerto 8080");
})
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || "development";
const {loggerDev, loggerProd} = require("./logger");

const app = express();


const logger = NODE_ENV === "production" 
  ? loggerProd 
  : loggerDev;

app.get("/suma", (req, res) => {
  const {a, b} = req.query;
  const encontroValorNoNumerico = [a, b].some( el => isNaN(el));
  if (encontroValorNoNumerico) {
    // Manejo de error y loggeo
    logger.log("warn", "Valor de tipo incorrecto (a: Int, b:Int)");
    res.status(400).send("Valor de tipo incorrecto (a: Int, b:Int)");
    return;
  }
  const c = parseInt(a) + parseInt(b);
  logger.log("info", `Operacion exitosa: Resultado suma = ${c}`);
  res.send({suma: c});
});

app.get("*", (req, res) => {
  logger.log("warn", `Ruta no encontrada ${req.url}`);
  res.status(404).send(`Ruta no encontrada ${req.url}`);
})

const server = app.listen(8080, () => {
  console.log("Ejecutando servidor... puerto 8080");
});

server.on("error", (err) => {
  logger.log("error", `Ocurrio un error al iniciar el server: ${err}`);
})
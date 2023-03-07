const {calcular} = require("./calcular");

process.on('message', msg => {
  console.log("mensaje del padre hacia el hijo", msg);
  const suma = calcular();
  process.send(suma);
})
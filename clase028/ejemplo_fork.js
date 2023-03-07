const {fork} = require("child_process");

const hijo = fork("./child.js");
console.log("Se envia mensaje del padre al hijo");
hijo.send("start");

hijo.on("message", (msg) => {
  console.log(msg);
});

console.log("Se ejecuta casi inmediatamente");
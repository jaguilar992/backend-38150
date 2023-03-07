const fs = require("fs");
// process.on("beforeExit", () => {
//   console.log("Esto solo se ve antes de terminar el programa");
// });

// process.on("exit", (code) => {
//   console.log("Terminando el programa con codigo " + code);
// });


process.on("uncaughtException", function(err) {
  console.log("Excepción capturada: " + err);
});


// setTimeout(function() {
//   console.log("Esto se ejecutará");
// }, 1000);


console.log("Hola Mundo!");
console.log(process.execPath);

// Intencionalmente generamos un error
try {
  nonexistentFunc();
} catch (err) {
  console.error(err);
}

fs.readFileSync("./nombres.txt", "utf8");



// console.log("Console.log despues nonexistentFunc();");
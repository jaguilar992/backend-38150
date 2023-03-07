const argv = process.argv; // argv arreglo de argumentos de entrada al script
const processName = argv[1];
const ENTRADA_VACIA = "Entrada vacía";
const TIPO_INVALIDO = "Tipo invalido dentro de los argumentos";

console.xlog = function (chars) {
  process.stdout.write(JSON.stringify(chars) + '\n');
}

let numeros = argv.slice(2); // array de strings

if (numeros.length === 0) {
  throw new Error(ENTRADA_VACIA);
}

numeros = numeros.map( n => parseInt(n))
const tipos = numeros.map(n => typeof n);

for (let num of numeros) {
  const no_es_numero = Number.isNaN(num);
   if (no_es_numero) {
    throw new Error (TIPO_INVALIDO);
   }
}

const promedio = numeros.reduce((a, b) => parseInt(a) + parseInt(b)) / numeros.length;
const suma = numeros.reduce((a,b) => parseInt(a) + parseInt(b));
const min = Math.min(...numeros); // Math.min(4,8,3,5)
const max = Math.max(...numeros); // Math.max(4,8,3,5)

const ejecutable = processName;
const pid = process.pid;

process.on("uncaughtException", (err) => {
  switch (err) {
    case ENTRADA_VACIA:
       console.xlog({
        error: {
          descripcion: ENTRADA_VACIA
        }
       });
      break;
    case TIPO_INVALIDO:
      console.xlog({
        descripcion: ENTRADA_VACIA,
        numeros, //
        tipos: tipos, //
      })
      break;
    default: 
      break;
  }
});

console.xlog({
  numeros,
  promedio: 0, // TODO
  max: 0, //TODO
  min: 0, //TODO
  ejecutable,
  pid,
})


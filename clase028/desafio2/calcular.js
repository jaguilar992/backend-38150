function calcular() {
  let suma = 0;
  for (let i = 0; i < 1e9; i++) {
    suma += i;
  }
  return suma;
}


module.exports = {
  calcular
}
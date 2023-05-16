function saludar(nombre: string = 'mundo'): string {
  return `Hola ${nombre}!`;
}

const saludo: string = saludar('Fernando');
console.log(saludo);
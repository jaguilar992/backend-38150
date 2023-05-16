const encoder = new TextEncoder();
const argv: string[] = Deno.args;

console.log(argv)
const nombre = argv[0];
const apellido = argv[1];

if (!nombre || !apellido) {
    console.log("Se necesita nombre y apellido");
    Deno.exit(1);
}

const data = encoder.encode(`Hello World\nMy name is ${nombre} ${apellido}\n`);
await Deno.writeFile("04.escritura_archivos.txt", data);

// Dar permisos de escritura
// deno run --allow-write 04.argumentos_script.ts Antonio Aguilar
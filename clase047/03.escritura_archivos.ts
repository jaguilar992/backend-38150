const encoder = new TextEncoder();
const data = encoder.encode("Hello World\nMy name is Luis\n");
await Deno.writeFile("03.escritura_archivos.txt", data);


// Dar permisos de escritura
// deno run --allow-write 03.escritura_archivos.ts
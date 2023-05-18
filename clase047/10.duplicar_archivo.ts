import * as fs from "https://deno.land/std@0.170.0/fs/mod.ts";

fs.copy("./04.escritura_archivos.txt", "./10.ejemplo_copy.txt");

// deno run --allow-read --allow-write 10.duplicar_archivo.ts
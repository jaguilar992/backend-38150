import * as conversion from "https://deno.land/std@0.170.0/streams/conversion.ts";
import * as fs from "https://deno.land/std@0.170.0/fs/mod.ts";

const file = await Deno.open("./04.escritura_archivos.txt", {read: true});
// await Deno.copy(file, Deno.stdout);

await conversion.copy(file, Deno.stdout);
file.close();

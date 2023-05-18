const URL = "https://jsonplaceholder.typicode.com/todos/1";

const resp = await fetch(URL);
const json = await resp.json();

console.log(json);

// deno run --allow-net 09.consumir_api.ts
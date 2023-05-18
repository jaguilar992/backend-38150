
import {oak, oakCors} from "./deps.ts";
import pokemonRouter from "./routes/pokemon.ts";
import todoRouter from "./routes/todo.ts";
const app = new oak.Application();
const PORT = 3000;

// app.use((ctx) => {
//   ctx.response.body = "Hello world!";
// });

app.use(oakCors()); // Enable CORS for All Routes
app.use(todoRouter.routes());
app.use(pokemonRouter.routes());

console.log(`Server running on port ${PORT}`);
await app.listen({ port: PORT });
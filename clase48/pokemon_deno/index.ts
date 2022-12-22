import { Application } from "./deps.ts";
import { pokemonRouter } from "./routes/pokemon.ts";
const app = new Application();

app.use(pokemonRouter.routes());

await app.listen({ port: 8080 });
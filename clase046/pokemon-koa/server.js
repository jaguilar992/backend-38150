const Koa =  require('koa');
const Router= require("koa-router");
const { koaBody } = require('koa-body');
const {connectMongo} = require('./database');
connectMongo();

const {Schema, model} = require("mongoose");

const PokemonSchema = new Schema({
  id:   {type: Number, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
});

const Pokemon = model("Pokemon", PokemonSchema);


const app = new Koa();

const pokemonsDict = {}

app.use(koaBody());

const PokemonRouter = new Router({
  prefix: "/pokemon"
});

const pokemons = {}

// Read all pokemons
// const findAll = async (ctx) => {
//   ctx.status = 200;
//   const pokemons = Object.values(pokemonsDict);
//   ctx.body = {
//     pokemons,
//     message: 'Successfully retrieved all pokemons'
//   };
// };

// const create = async (ctx) => {
//   const body = ctx.request.body;
//   console.log(body);
//   const { name, type, id } = body;
//   if (!name || !type || !id) {
//     ctx.status = 400;
//     ctx.body = {
//       message: 'Invalid request body'
//     }
//     return;
//   }
//   const pokemon = {
//     name,
//     type,
//     id
//   }
//   pokemonsDict[id] = pokemon;
//   ctx.status = 201;
//   ctx.body = {
//     pokemon,
//     message: 'Successfully created pokemon'
//   }
// };

const findAll = async (ctx) => {
  ctx.status = 200;
  const pokemons = await Pokemon.find({});
  ctx.body = {
    pokemons,
    message: 'Successfully retrieved all pokemons'
  };
};

const create = async (ctx) => {
  const body = ctx.request.body;
  const pokemon = new Pokemon(body);
  try {
    await pokemon.save();
    ctx.status = 201;
    ctx.body = {
      pokemon,
      message: 'Successfully created pokemon'
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      message: 'Invalid request body'
    }
  }
}

PokemonRouter.get("/", findAll);
PokemonRouter.post("/", create);

app.use(PokemonRouter.routes());

app.listen(3000);
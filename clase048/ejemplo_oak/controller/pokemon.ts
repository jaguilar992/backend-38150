import { PokemonCollection } from "../database/index.ts";
import { oak } from "../deps.ts";
import { Pokemon } from "../schemas/index.ts";

export async function getPokemons(ctx: oak.Context) {
  const _pokemons = await PokemonCollection.find({}).toArray();
  ctx.response.body = _pokemons;
}

/**
 * {
 *  "name": "Pikachu",
 *  "type": "Electric",
 *  "id": 25
 * }
 */
export async function createPokemon(ctx: oak.Context) {
  const body = await ctx.request.body().value;
  const { name, type, id } = body;
  const _pokemon: Pokemon = {
    name,
    type,
    id,
  }
  const resp = await PokemonCollection.insertOne(_pokemon);
  ctx.response.status = 201;
  ctx.response.body = {
    ..._pokemon,
    _id: resp,
  };
}

export async function getPokemonById(ctx: oak.Context){
  const params = oak.helpers.getQuery(ctx, { mergeParams: true });
  const id = params.id;
  const _pokemon = await PokemonCollection.findOne({ id: parseInt(id) });
  if (_pokemon) {
    ctx.response.body = _pokemon;
  } else {
    ctx.response.status = 404;
    ctx.response.body = { message: "Pokemon not found" };
  }
}

export async function updatePokemonById(ctx: oak.Context){
  const params = oak.helpers.getQuery(ctx, { mergeParams: true });
  const id = parseInt(params.id);
  const body = await ctx.request.body().value;
  if (body && body?.name && body?.type) {
    await PokemonCollection.updateOne({id}, {
      $set: {
        name: body.name,
        type: body.type,
      }
    });
    const pokemon = await PokemonCollection.findOne({id});
    ctx.response.status = 200;
    ctx.response.body = pokemon;
    return ;
  } else 
    ctx.response.body = {
      error: true,
      message: "Invalid body: name, type are required"
    }
}

export async function deletePokemonById(ctx: oak.Context){
  const params = oak.helpers.getQuery(ctx, { mergeParams: true });
  const id = parseInt(params.id);
  await PokemonCollection.deleteOne({id});    
  ctx.response.status = 200;
  ctx.response.body = {
    message: "Pokemon deleted"
  };
  return ;
}
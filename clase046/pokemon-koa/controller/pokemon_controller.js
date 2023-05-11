const pokemons = {}

// Read all pokemons
const findAll = async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    pokemons,
    message: 'Successfully retrieved all pokemons'
  };
};

// Read one pokemon
const findOne = async (ctx) => {};

// Create a new pokemon
const create = async (ctx) => {};

module.exports = {
  findAll,
  findOne,
  create
}
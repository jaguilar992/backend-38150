import joi from 'joi';

export const pokemonSchema = joi.object({
  name: joi.string()
    .alphanum()
    .required(),
  type: joi.string()
    .alphanum()
    .required(),
  image: joi.string(),
  id: joi.number()
    .required(),
});
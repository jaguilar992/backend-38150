import { DATABASE_TYPE } from "../../../config";
import { PokemonDAOMongo } from "./pokemon.mongo.dao";

export class PokemonFactory {
  private pokemonDAO;

  getDAO() {
    switch(DATABASE_TYPE) {
      case "MONGO":
        this.pokemonDAO = new PokemonDAOMongo();
        break;
      case "MYSQL":
        break;
      case "POSTGRES":
        break;
      case "FIREBASE":
        break;
      case "SQLITE":
        break;
      default:
        throw new Error("No se ha definido un tipo de base de datos");
        break;
    }
    return this.pokemonDAO;
  }
}

export default new PokemonFactory();
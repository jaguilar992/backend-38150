import { DATABASE_TYPE } from "../../../config";
import { TrainerDAOMongo } from "./trainer.mongo.dao";

export class TrainerFactory {
  private pokemonDAO;

  getDAO() {
    switch(DATABASE_TYPE) {
      case "MONGO":
        this.pokemonDAO = new TrainerDAOMongo();
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

export default new TrainerFactory();
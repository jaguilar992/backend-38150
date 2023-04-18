import {Schema, model} from "mongoose";
import { TrainerDTO } from "./trainer.dto";

export const TrainerSchema = new Schema<TrainerDTO>({
  dni: {type: Number, required: true, default: 0},
  name: {type: String, required: true, default: ""},
  city: {type: String, required: true, default: ""},
  age: {type: Number, required: false, default: 15},
  pokemons: {type: [Number], required: false, default: []},
});

export const TrainerModel = model("trainer", TrainerSchema);

export class TrainerDAOMongo {
  public async getAllTrainers() {
    return await TrainerModel.find();
  }

  public async getTrainerByDNI(dni: number) {
    return await TrainerModel.findOne({ dni });
  }

  public async createTrainer(trainer: TrainerDTO) {
    const _trainer = new TrainerModel(trainer);
    await _trainer.save(); // Agrega el _id
    return _trainer;
  }

  // Update 
  public async updateTrainer(dni: number, trainer: TrainerDTO) {
    const _trainer = await TrainerModel.findOneAndUpdate({ dni }, trainer);
    return _trainer;
  }

  // Delete
  public async deletePokemon(dni: number) {
    await TrainerModel.deleteOne({ dni });
    return true;
  }
}

export default new TrainerDAOMongo();
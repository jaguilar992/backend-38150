import { Repository } from "../repository";
import { TrainerDTO } from "./trainer.dto";
import trainerFactory from "./trainer.factory";
import pokemonRepository from "../pokemon/pokemon.repository";


export class TrainerRepository implements Repository {
  private trainerDAO;
  constructor () {
    this.trainerDAO = trainerFactory.getDAO();
  }

  async find(): Promise<TrainerDTO[]> {
    let trainers: any[] = await this.trainerDAO.getAllTrainers();
    return trainers;
  }

  async findOne(dni: number): Promise<TrainerDTO> {
    const trainer: TrainerDTO = await this.trainerDAO.getTrainerByDNI(dni);
    let _pokemons: any = await trainer?.pokemons?.map(async (id: any) => {
      const _pokemon = await pokemonRepository.findOne(id);
      return _pokemon;
    });
    _pokemons = await Promise.all(_pokemons);
    trainer.pokemons = _pokemons;
    return {
      name: trainer.name,
      dni: trainer.dni,
      city: trainer.city,
      age: trainer.age,
      pokemons: _pokemons,
    };
  }
  
  async save(trainer: TrainerDTO): Promise<TrainerDTO> {
    return await this.trainerDAO.createTrainer(trainer);
  }

  async addPokemonToPokedexTrainer(dni: number, pokemonId: number) {
    const trainer = await this.trainerDAO.getTrainerByDNI(dni);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    trainer.pokemons.push(pokemonId);
    return await this.trainerDAO.updateTrainer(dni, trainer);
  }

  async update(dni: number, trainer: TrainerDTO): Promise<TrainerDTO> {
    return await this.trainerDAO.updateTrainer(dni, trainer);
  }

  async delete(dni: number): Promise<boolean> {
    return await this.trainerDAO.deleteTrainer(dni);
  }
}

export default new TrainerRepository();
import trainerRepository from "../modules/trainer/trainer.repository";

export async function getAllTrainers(req, res) {
  const trainers = await trainerRepository.find();
  res.json({data: trainers});
}

export async function getTrainerByDNI(req, res) {
  const { dni } = req.params;
  const trainer = await trainerRepository.findOne(dni);
  if (!trainer) {
    console.log("Trainer not found");
    return res.status(404).json({ message: "Trainer not found" });
  }
  res.json({data: trainer});
}

export async function createTrainer(req, res) {
  const { dni, city, name} = req.body;
  if (!dni || !city || !name) {
    console.log("Missing params");
    return res.status(400).json({ message: "Missing params" });
  }
  const trainer = await trainerRepository.save({ dni, city, name });
  res.json({data: trainer});
}

export async function addPokemon(req, res) {
  const { dni } = req.params;
  const { pokemonId } = req.body;
  if (!dni || !pokemonId) {
    console.log("Missing params");
    return res.status(400).json({ message: "Missing params" });
  }
  const trainer = await trainerRepository.addPokemonToPokedexTrainer(dni, pokemonId);
  res.json({data: trainer});
}
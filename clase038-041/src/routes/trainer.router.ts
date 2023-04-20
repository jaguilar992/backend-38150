import { Router } from "express";
import { addPokemon, createTrainer, getAllTrainers, getTrainerByDNI, removePokemon } from "../controller/trainer.controller";
const trainerRouter = Router();

trainerRouter.get("/", getAllTrainers);
trainerRouter.get("/:dni", getTrainerByDNI);
trainerRouter.post("/", createTrainer);
trainerRouter.put("/addPokemon/:dni", addPokemon);
trainerRouter.put("/removePokemon/:dni", removePokemon);

export default trainerRouter;
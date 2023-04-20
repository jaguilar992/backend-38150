import { Router } from "express";
import {
  renderPokedex,
} from "../controller/trainer.controller";
const trainerViewsRouter = Router();

trainerViewsRouter.get("/:dni", renderPokedex);

export default trainerViewsRouter;
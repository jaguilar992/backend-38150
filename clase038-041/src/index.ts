import express from "express";
import * as cors from "cors";
import connectDatabase from "./database";
import { PORT } from "../config";
import { logger } from "./logger";
// Import routers
import pokemonRouter from "./routes/pokemon.router";
import pokemonViewsRouter from "./routes/pokemon.views.router";
import trainerRouter from "./routes/trainer.router";
import trainerViewsRouter from "./routes/trainer.view.router";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/../views/");

// Connect to database
connectDatabase();

// app.use(cookieParser(SECRET));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

// Routes
app.use("/api/pokemon", pokemonRouter);
app.use("/api/trainer", trainerRouter);

app.use("/views/pokemon", pokemonViewsRouter);
app.use("/views/trainer", trainerViewsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Pokedex",
    message: "Welcome to the Pokedex",
    time: Date.now(),
  })
});

const server = app.listen(PORT, () => {
  logger.info(`🔋 Server running on port::${PORT}`);
});

server.on("error", (error) => {
  logger.error(`🔥 Server error: ${error.message}`);
});

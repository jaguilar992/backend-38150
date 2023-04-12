import express from "express";
import * as cors from "cors";
import connectDatabase from "./database";
import { PORT } from "../config";
import { logger } from "./logger";
// Import routers
import pokemonRouter from "./routes/pokemon.router";
import pokemonRepository from "./repository/pokemon.repository";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/../views/");

// Connect to database
connectDatabase();

// app.use(cookieParser(SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + "/../public"));

// Routes
app.use("/api/pokemon", pokemonRouter);

app.get("/", (req, res) => {res.json({time: Date.now()})});

const server = app.listen(PORT, () => {
  logger.info(`🔋 Server running on port::${PORT}`);
});

server.on("error", (error) => {
  logger.error(`🔥 Server error: ${error.message}`);
});

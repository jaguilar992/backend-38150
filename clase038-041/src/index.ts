import express from "express";
// import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import pokemonRouter from "./routes/pokemon.router";

import connectDatabase from "./database"
connectDatabase();

const app = express();
import { PORT } from "../config";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser(SECRET));
app.use(cors());

// Routes
import { logger } from "./logger";

app.get("/", (req, res) => res.json({ time: Date.now() }));

app.use("/api/pokemon", pokemonRouter);

const server = app.listen(PORT, () => {
  logger.info(`🔋 Server running on port::${PORT}`);
});

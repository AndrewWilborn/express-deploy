import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getAllCandy, addNewCandy, updateCandyById } from "./src/candy.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    logger.info("API was hit.");
    res.send("It's Working");
});

app.get("/candy", getAllCandy);

app.post("/candy", addNewCandy);

app.patch("/candy/:id", updateCandyById);

// export const api = onRequest((req, res) => app(req, res));
export const api = onRequest(app);

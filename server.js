import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { logger } from "logger-express";
import postRouter from './routes/rutas.js'

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(logger());

app.use('/', postRouter);

app.listen(PORT, () => {
    console.log(`Server On http://localhost:${PORT}`)
});
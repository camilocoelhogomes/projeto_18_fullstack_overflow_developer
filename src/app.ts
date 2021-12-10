import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', async (req, res) => res.status(200).send("I'm Alive"));

export default app;

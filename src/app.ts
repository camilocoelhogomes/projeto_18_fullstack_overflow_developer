import express from 'express';
import cors from 'cors';
import userController from './controller/userController';
import questionController from './controller/questionController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', async (req, res) => res.status(200).send("I'm Alive"));
app.post('/users', userController.newUser);
app.post('/questions', questionController.newQuestion);
export default app;

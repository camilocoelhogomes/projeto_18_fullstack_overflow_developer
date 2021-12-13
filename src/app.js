var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
import userController from './controller/userController';
import questionController from './controller/questionController';
import userAuth from './middleware/userAuth';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/is-live', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).send("I'm Alive"); }));
app.post('/users', userController.newUser);
app.post('/questions', questionController.newQuestion);
app.post('/questions/:questionId', userAuth, questionController.newAnswer);
app.get('/questions/:questionId', questionController.getQuestion);
app.get('/questions', questionController.getUnresolvedQuestion);
export default app;

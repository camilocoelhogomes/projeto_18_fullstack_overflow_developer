var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import answerFactory from '../factory/answerFactory.js';
import questionService from '../services/questionService.js';
import validationService from '../services/validationService.js';
const newQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = req.body;
        const reqError = validationService.question(question);
        if (reqError)
            return res.sendStatus(400);
        const createdQuestion = yield questionService.createNewQuestion(question);
        return res.status(201).send(createdQuestion);
    }
    catch (error) {
        return res.sendStatus(500);
    }
});
const newAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionId } = req.params;
        const reqError = validationService.answer(req.body);
        if (reqError)
            return res.sendStatus(400);
        const answer = new answerFactory.NewAnswer({
            answer: req.body.answer,
            studentId: req.body.studentId,
            questionId,
        });
        yield questionService.createNewAnswer(answer);
        return res.sendStatus(201);
    }
    catch (error) {
        return res.sendStatus(500);
    }
});
const getQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionId } = req.params;
        const question = yield questionService.getQuestion(questionId);
        return res.status(200).send(question);
    }
    catch (error) {
        if (error.name === 'NOT FOUND') {
            return res.status(404).send(error.message);
        }
        return res.sendStatus(500);
    }
});
const getUnresolvedQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield questionService.getUnresolvedQuestion();
        return res.status(200).send(question);
    }
    catch (error) {
        return res.sendStatus(500);
    }
});
const questionController = {
    newQuestion,
    newAnswer,
    getQuestion,
    getUnresolvedQuestion,
};
export default questionController;

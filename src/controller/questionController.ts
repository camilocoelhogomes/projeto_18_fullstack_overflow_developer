import { Request, Response } from 'express';
import answerFactory from '../factory/answerFactory';
import { AnswerInterface } from '../interfaces/answerInterface';
import { QuestionInterface } from '../interfaces/questionInterfaces';
import questionService from '../services/questionService';
import validationService from '../services/validationService';

const newQuestion = async (req: Request, res: Response) => {
  try {
    const question: QuestionInterface = req.body;
    const reqError = validationService.question(question);
    if (reqError) return res.sendStatus(400);
    const createdQuestion = await questionService.createNewQuestion(question);
    return res.status(201).send(createdQuestion);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const newAnswer = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;

    const reqError = validationService.answer(req.body);
    if (reqError) return res.sendStatus(400);

    const answer: AnswerInterface = new answerFactory.NewAnswer({
      answer: req.body.answer,
      studentId: req.body.studentId,
      questionId,
    });
    await questionService.createNewAnswer(answer);
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const getQuestion = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const question = await questionService.getQuestion(questionId);
    return res.status(200).send(question);
  } catch (error) {
    if (error.name === 'NOT FOUND') {
      return res.status(404).send(error.message);
    }
    return res.sendStatus(500);
  }
};

const getUnresolvedQuestion = async (req: Request, res: Response) => {
  try {
    const question = await questionService.getUnresolvedQuestion();
    return res.status(200).send(question);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const questionController = {
  newQuestion,
  newAnswer,
  getQuestion,
  getUnresolvedQuestion,
};

export default questionController;

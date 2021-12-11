import { Request, Response } from 'express';
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

const questionController = {
  newQuestion,
};

export default questionController;

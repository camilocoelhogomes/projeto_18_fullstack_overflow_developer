import { AnswerInterface } from '../interfaces/answerInterface';
import { QuestionId, QuestionInterface } from '../interfaces/questionInterfaces';
import questionsRepository from '../repository/questionsRepository';

const createNewQuestion = async (newQuestion: QuestionInterface): Promise<QuestionId> => {
  const createdQuestion = await questionsRepository.createQuestion(newQuestion);
  return { id: createdQuestion.id };
};

const createNewAnswer = async (newAnswer:AnswerInterface): Promise<true> => {
  await questionsRepository.createAnswer(newAnswer);
  return true;
};

const questionService = {
  createNewQuestion,
  createNewAnswer,
};

export default questionService;

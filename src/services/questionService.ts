import { AnswerInterface } from '../interfaces/answerInterface';
import { QuestionId, QuestionInterface, QuestionDataBaseInterface } from '../interfaces/questionInterfaces';
import questionsRepository from '../repository/questionsRepository';

const createNewQuestion = async (newQuestion: QuestionInterface): Promise<QuestionId> => {
  const createdQuestion = await questionsRepository.createQuestion(newQuestion);
  return { id: createdQuestion.id };
};

const createNewAnswer = async (newAnswer:AnswerInterface): Promise<true> => {
  await questionsRepository.createAnswer(newAnswer);
  return true;
};

const getQuestion = async (questionId:String): Promise<QuestionDataBaseInterface> => {
  const question = await questionsRepository.getUnresolvedQuestionById(questionId);
  return question;
};

const questionService = {
  createNewQuestion,
  createNewAnswer,
  getQuestion,
};

export default questionService;

import questionFactory from '../factory/questionFactory';
import { AnswerInterface } from '../interfaces/answerInterface';
import { QuestionId, QuestionInterface, QuestionWithOutAnswerInterface } from '../interfaces/questionInterfaces';
import questionsRepository from '../repository/questionsRepository';

const createNewQuestion = async (newQuestion: QuestionInterface): Promise<QuestionId> => {
  const createdQuestion = await questionsRepository.createQuestion(newQuestion);
  return { id: createdQuestion.id };
};

const createNewAnswer = async (newAnswer:AnswerInterface): Promise<true> => {
  await questionsRepository.createAnswer(newAnswer);
  await questionsRepository.updateAwnserdQuestion(newAnswer);
  return true;
};

const getQuestion = async (questionId:String): Promise<QuestionWithOutAnswerInterface> => {
  const question = await questionsRepository.getUnresolvedQuestionById(questionId);
  const returnedQuestion = new questionFactory.QuestionWithOutAnswer(question);
  return returnedQuestion;
};

const questionService = {
  createNewQuestion,
  createNewAnswer,
  getQuestion,
};

export default questionService;

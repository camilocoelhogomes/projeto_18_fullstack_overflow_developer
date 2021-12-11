import questionFactory from '../factory/questionFactory';
import { AnswerInterface } from '../interfaces/answerInterface';
import {
  QuestionDataBaseInterface,
  QuestionId, QuestionInterface, QuestionWithAnswerInterface, QuestionWithOutAnswerInterface, QuestionWithOutAnswerWithIdInterface,
} from '../interfaces/questionInterfaces';
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

const getQuestion = async (questionId: String): Promise<QuestionWithOutAnswerInterface|QuestionWithAnswerInterface> => {
  let question: QuestionDataBaseInterface | QuestionWithAnswerInterface | null;
  question = await questionsRepository.getResolvedQuestionById(questionId);
  if (!question) {
    question = await questionsRepository.getUnresolvedQuestionById(questionId);
    return new questionFactory.QuestionWithOutAnswer(question);
  }
  return question;
};

const getUnresolvedQuestion = async (): Promise<QuestionWithOutAnswerWithIdInterface[]> => {
  const question = await questionsRepository.getUnresolvedQuestion();
  return question;
};

const questionService = {
  createNewQuestion,
  createNewAnswer,
  getQuestion,
  getUnresolvedQuestion,
};

export default questionService;

/* eslint-disable */
import questionFactory from '../factory/questionFactory.js';
import questionsRepository from '../repository/questionsRepository.js';

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }
  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

const createNewQuestion = (newQuestion) => __awaiter(void 0, void 0, void 0, function* () {
  const createdQuestion = yield questionsRepository.createQuestion(newQuestion);
  return { id: createdQuestion.id };
});
const createNewAnswer = (newAnswer) => __awaiter(void 0, void 0, void 0, function* () {
  yield questionsRepository.createAnswer(newAnswer);
  yield questionsRepository.updateAwnserdQuestion(newAnswer);
  return true;
});
const getQuestion = (questionId) => __awaiter(void 0, void 0, void 0, function* () {
  let question;
  question = yield questionsRepository.getResolvedQuestionById(questionId);
  if (!question) {
    question = yield questionsRepository.getUnresolvedQuestionById(questionId);
    return new questionFactory.QuestionWithOutAnswer(question);
  }
  return question;
});
const getUnresolvedQuestion = () => __awaiter(void 0, void 0, void 0, function* () {
  const question = yield questionsRepository.getUnresolvedQuestion();
  return question;
});
const questionService = {
  createNewQuestion,
  createNewAnswer,
  getQuestion,
  getUnresolvedQuestion,
};
export default questionService;

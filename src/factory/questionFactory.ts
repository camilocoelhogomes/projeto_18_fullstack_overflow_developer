import { QuestionDataBaseInterface, QuestionWithOutAnswerInterface } from '../interfaces/questionInterfaces';

class QuestionWithOutAnswer implements QuestionWithOutAnswerInterface {
  submitAt: string;

  isAwnser: boolean;

  question: string;

  student: string;

  class: string;

  tags: string;

  constructor(questionData: QuestionDataBaseInterface) {
    this.submitAt = questionData.submit_at;
    this.question = questionData.question;
    this.student = questionData.student;
    this.class = questionData.class;
    this.tags = questionData.tags;
    this.isAwnser = questionData.answer;
  }
}
const questionFactory = {
  QuestionWithOutAnswer,
};
export default questionFactory;

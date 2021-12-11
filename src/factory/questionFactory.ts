import { QuestionDataBaseInterface } from '../interfaces/questionInterfaces';

class QuestionWithOutAnswer {
  submitAt: string;

  question: string;

  student: string;

  class: string;

  tags: string;

  awnser: boolean;

  constructor(questionData: QuestionDataBaseInterface) {
    this.submitAt = questionData.submit_at;
    this.question = questionData.question;
    this.student = questionData.student;
    this.class = questionData.class;
    this.tags = questionData.tags;
    this.awnser = questionData.answer;
  }
}
const questionFactory = {
  QuestionWithOutAnswer,
};
export default questionFactory;

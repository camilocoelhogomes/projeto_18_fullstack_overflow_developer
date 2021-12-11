import { QuestionDataBaseInterface } from '../interfaces/questionInterfaces';

class QuestionWithOutAnswer {
  submitAt: string;

  question: string;

  student: string;

  class: string;

  tags: string;

  constructor(questionData: QuestionDataBaseInterface) {
    this.submitAt = questionData.submit_at;
    this.question = questionData.question;
    this.student = questionData.student;
    this.class = questionData.id;
    this.tags = questionData.tags;
  }
}
const answerFactory = {
  QuestionWithOutAnswer,
};
export default answerFactory;

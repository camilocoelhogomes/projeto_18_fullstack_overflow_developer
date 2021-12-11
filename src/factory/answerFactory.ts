import { AnswerInterface } from '../interfaces/answerInterface';

class NewAnswer {
  answer: string;

  studentId: string;

  questionId: string;

  constructor(answerData: AnswerInterface) {
    this.answer = answerData.answer;
    this.studentId = answerData.studentId;
    this.questionId = answerData.questionId;
  }
}
const answerFactory = {
  NewAnswer,
};
export default answerFactory;

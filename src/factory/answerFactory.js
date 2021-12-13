class NewAnswer {
  constructor(answerData) {
    this.answer = answerData.answer;
    this.studentId = answerData.studentId;
    this.questionId = answerData.questionId;
  }
}
const answerFactory = {
  NewAnswer,
};
export default answerFactory;

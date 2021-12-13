class QuestionWithOutAnswer {
  constructor(questionData) {
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

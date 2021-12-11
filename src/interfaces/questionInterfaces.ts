export interface QuestionInterface {
  question: string;
  student: string;
  class: string;
  tags: string;
}

export interface QuestionDataBaseInterface extends QuestionInterface {
  id: string;
  submit_at: string;
  answer: boolean;
}

export interface QuestionId {
  id: string;
}

export interface QuestionWithOutAnswerInterface extends QuestionInterface {
  submitAt: string;
  awnser: boolean;
}

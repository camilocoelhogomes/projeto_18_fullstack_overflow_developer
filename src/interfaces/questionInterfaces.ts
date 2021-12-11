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
  isAwnser: boolean;
}

export interface QuestionWithOutAnswerWithIdInterface extends QuestionWithOutAnswerInterface{
  id: string;
}

export interface QuestionWithAnswerInterface extends QuestionInterface {
  submitAt: string;
  isAnswer: boolean;
  answeredAt: string,
  answeredBy: string,
  answer: string,
}

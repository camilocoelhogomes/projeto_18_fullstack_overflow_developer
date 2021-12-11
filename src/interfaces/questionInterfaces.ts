export interface QuestionInterface {
  question: string;
  student: string;
  class: string;
  tags: string;
}

export interface QuestionDataBaseInterface extends QuestionInterface {
  id: string;
  submit_at: string;
}

export interface QuestionId {
  id: string;
}

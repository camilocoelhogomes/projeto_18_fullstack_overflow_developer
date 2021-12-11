import connection from '../dbConfig';
import { AnswerInterface } from '../interfaces/answerInterface';
import { QuestionDataBaseInterface, QuestionInterface } from '../interfaces/questionInterfaces';

const createQuestion = async (newQuestion: QuestionInterface): Promise<QuestionDataBaseInterface> => {
  const {
    question,
    student,
    class: newClass,
    tags,
  } = newQuestion;
  const createdUser = await connection.query(`
  INSERT INTO
    questions (question,student, class,tags)
  VALUES
    ($1,$2,$3,$4)
  RETURNING
    *;
  `, [
    question,
    student,
    newClass,
    tags,
  ]);
  return createdUser.rows[0];
};

const createAnswer = async (newAnswer: AnswerInterface): Promise<true> => {
  const {
    answer,
    questionId,
    studentId,
  } = newAnswer;
  await connection.query(`
  INSERT INTO
    answer (question_id,answered_by_id, answer)
  VALUES
    ($1,$2,$3);
  `, [
    questionId,
    studentId,
    answer,
  ]);
  return true;
};

const getUnresolvedQuestionById = async (questionId:String) : Promise<QuestionDataBaseInterface> => {
  try {
    const selectedQuestion = await connection.query(`
    SELECT
      *
    FROM
      questions
    WHERE
      questions."id" = ($1);
    `, [questionId]);
    return selectedQuestion.rows[0];
  } catch (error) {
    return null;
  }
};

const questionsRepository = {
  createQuestion,
  createAnswer,
  getUnresolvedQuestionById,
};

export default questionsRepository;

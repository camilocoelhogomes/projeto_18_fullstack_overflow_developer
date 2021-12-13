import connection from '../dbConfig';
import { AnswerInterface } from '../interfaces/answerInterface';
import {
  QuestionDataBaseInterface, QuestionInterface, QuestionWithAnswerInterface, QuestionWithOutAnswerWithIdInterface,
} from '../interfaces/questionInterfaces';

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

const getUnresolvedQuestionById = async (questionId:String) : Promise<QuestionDataBaseInterface|null> => {
  try {
    const selectedQuestion = await connection.query(`
    SELECT
      *
    FROM
      questions
    WHERE
      questions."id" = ($1);
    `, [questionId]);
    if (!selectedQuestion.rowCount) return null;
    return selectedQuestion.rows[0];
  } catch (error) {
    return null;
  }
};

const getResolvedQuestionById = async (questionId:String) : Promise<QuestionWithAnswerInterface|null> => {
  try {
    const selectedQuestion = await connection.query(`
    SELECT
      questions."question" AS question,
      questions."student" AS student,
      questions."class" AS class,
      questions."tags" AS tags,
      questions."answer" AS "isAnswer",
      questions.submit_at AS "submitAt",
      answer."answered_at" AS "answeredAt",
      users.name AS "answeredBy",
      answer."answer" AS answer
    FROM
      questions
    JOIN
      answer
    ON
      answer.question_id = questions.id
    JOIN
      users
    ON
      users.id = answer."answered_by_id"
    WHERE
      questions."id" = ($1);
    `, [questionId]);
    if (!selectedQuestion.rowCount) return null;
    return selectedQuestion.rows[0];
  } catch (error) {
    return null;
  }
};

const updateAwnserdQuestion = async (newAnswer: AnswerInterface): Promise<true> => {
  const {
    questionId,
  } = newAnswer;
  await connection.query(`
    UPDATE
      questions
    SET
      answer = TRUE
    WHERE
      id = ($1);`, [
    questionId,
  ]);
  return true;
};

const getUnresolvedQuestion = async () : Promise<QuestionWithOutAnswerWithIdInterface[]|null> => {
  try {
    const selectedQuestion = await connection.query(`
    SELECT
      questions.id AS id
      questions."question" AS question,
      questions."student" AS student,
      questions."class" AS class,
      questions."tags" AS tags,
      questions."answer" AS "isAnswer",
    FROM
      questions
    WHERE
      questions."answer" = FALSE;
    `, []);
    if (!selectedQuestion.rowCount) return null;
    return selectedQuestion.rows;
  } catch (error) {
    return null;
  }
};

const questionsRepository = {
  createQuestion,
  createAnswer,
  getUnresolvedQuestionById,
  updateAwnserdQuestion,
  getResolvedQuestionById,
  getUnresolvedQuestion,
};

export default questionsRepository;

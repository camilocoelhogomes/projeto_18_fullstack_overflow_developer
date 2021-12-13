var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import connection from '../dbConfig.js';
const createQuestion = (newQuestion) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, student, class: newClass, tags, } = newQuestion;
    const createdUser = yield connection.query(`
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
});
const createAnswer = (newAnswer) => __awaiter(void 0, void 0, void 0, function* () {
    const { answer, questionId, studentId, } = newAnswer;
    yield connection.query(`
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
});
const getUnresolvedQuestionById = (questionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const selectedQuestion = yield connection.query(`
    SELECT
      *
    FROM
      questions
    WHERE
      questions."id" = ($1);
    `, [questionId]);
        if (!selectedQuestion.rowCount)
            return null;
        return selectedQuestion.rows[0];
    }
    catch (error) {
        return null;
    }
});
const getResolvedQuestionById = (questionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const selectedQuestion = yield connection.query(`
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
        if (!selectedQuestion.rowCount)
            return null;
        return selectedQuestion.rows[0];
    }
    catch (error) {
        return null;
    }
});
const updateAwnserdQuestion = (newAnswer) => __awaiter(void 0, void 0, void 0, function* () {
    const { questionId, } = newAnswer;
    yield connection.query(`
    UPDATE
      questions
    SET
      answer = TRUE
    WHERE
      id = ($1);`, [
        questionId,
    ]);
    return true;
});
const getUnresolvedQuestion = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const selectedQuestion = yield connection.query(`
    SELECT
      questions.id AS id,
      questions."question" AS question,
      questions."student" AS student,
      questions."class" AS class,
      questions."tags" AS tags,
      questions."answer" AS "isAnswer"
    FROM
      questions
    WHERE
      questions."answer" = FALSE;
    `, []);
        if (!selectedQuestion.rowCount)
            return null;
        return selectedQuestion.rows;
    }
    catch (error) {
        return null;
    }
});
const questionsRepository = {
    createQuestion,
    createAnswer,
    getUnresolvedQuestionById,
    updateAwnserdQuestion,
    getResolvedQuestionById,
    getUnresolvedQuestion,
};
export default questionsRepository;

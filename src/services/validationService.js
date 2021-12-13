import Joi from 'joi';
const user = (newUser) => Joi.object({
    name: Joi.string().required(),
    class: Joi.string().required(),
}).validate(newUser).error;
const question = (newQuestion) => Joi.object({
    question: Joi.string().required(),
    student: Joi.string().required(),
    class: Joi.string().required(),
    tags: Joi.string().required(),
}).validate(newQuestion).error;
const answer = (newQuestion) => Joi.object({
    answer: Joi.string().required(),
    studentId: Joi.string().required(),
}).validate(newQuestion).error;
const validationService = {
    user,
    question,
    answer,
};
export default validationService;

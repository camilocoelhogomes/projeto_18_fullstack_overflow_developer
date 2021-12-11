import Joi from 'joi';
import { QuestionInterface } from '../interfaces/questionInterfaces';
import { UserInterface } from '../interfaces/userInterfaces';

const user = (newUser: UserInterface) => Joi.object({
  name: Joi.string().required(),
  class: Joi.string().required(),
}).validate(newUser).error;

const question = (newQuestion: QuestionInterface) => Joi.object({
  question: Joi.string().required(),
  student: Joi.string().required(),
  class: Joi.string().required(),
  tags: Joi.string().required(),
}).validate(newQuestion).error;

const validationService = {
  user,
  question,
};

export default validationService;

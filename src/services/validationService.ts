import Joi from 'joi';
import { UserInterface } from '../interfaces/userInterfaces';

const user = (newUser: UserInterface) => Joi.object({
  name: Joi.string(),
  class: Joi.string(),
}).validate(newUser).error;

const validationService = {
  user,
};

export default validationService;

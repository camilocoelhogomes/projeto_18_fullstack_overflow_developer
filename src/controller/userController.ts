import { Request, Response } from 'express';
import { UserInterface } from '../interfaces/userInterfaces';
import userService from '../services/userService';
import validationService from '../services/validationService';

const newUser = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;
    const reqError = validationService.user(user);
    if (reqError) return res.sendStatus(400);
    const token = await userService.createNewUser(user);
    return res.status(201).send(token);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const userController = {
  newUser,
};

export default userController;

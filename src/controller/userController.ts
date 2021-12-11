import { Request, Response } from 'express';
import { UserInterface } from '../interfaces/userInterfaces';
import validationService from '../services/validationService';

const newUser = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;
    const reqError = validationService.user(user);
    if (reqError) return res.sendStatus(400);
    return res.status(201).send(user);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const userController = {
  newUser,
};

export default userController;

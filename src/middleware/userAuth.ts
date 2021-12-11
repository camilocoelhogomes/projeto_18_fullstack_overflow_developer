import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const userAuth = (req:Request, res: Response, next: any) => {
  const { questionId } = req.params;
  const userToken = req.headers?.authorization.split('Bearer ')[1];
  if (!userToken || !questionId) {
    return res.sendStatus(401);
  }
  const decryptedUser = jwt.verify(userToken, process.env.JWT_SECRET);
  if (!(<any>decryptedUser).id) return res.sendStatus(401);
  req.body = { ...req.body, studentId: (<any>decryptedUser).id };
  return next();
};

export default userAuth;

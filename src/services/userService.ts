import jwt from 'jsonwebtoken';
import { UserInterface, UserToken } from '../interfaces/userInterfaces';
import userRepository from '../repository/userRepository';

const createNewUser = async (newUser: UserInterface): Promise<UserToken> => {
  const createdUser = await userRepository.createUser(newUser);
  const userToken = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET);
  return { token: userToken };
};

const userService = {
  createNewUser,
};

export default userService;

import { UserInterface } from '../interfaces/userInterfaces';
import userRepository from '../repository/userRepository';

const createNewUser = async (newUser: UserInterface) => {
  const createdUser = await userRepository.createUser(newUser);
  console.log(createdUser);
};

const userService = {
  createNewUser,
};

export default userService;

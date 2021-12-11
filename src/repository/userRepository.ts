import { UserInterface, UserWithId } from '../interfaces/userInterfaces';
import connection from '../dbConfig';

const createUser = async (newUser: UserInterface): Promise<UserWithId> => {
  const {
    name,
    class: newClass,
  } = newUser;
  try {
    const createdUser = await connection.query(`
  INSERT INTO
    users (name, class)
  VALUES
    ($1,$2)
  RETURNING
    *;
  `, [
      name,
      newClass,
    ]);
    return createdUser.rows[0];
  } catch (error) {
    return error;
  }
};

const userRepository = {
  createUser,
};

export default userRepository;

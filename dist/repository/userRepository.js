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
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, class: newClass, } = newUser;
    const createdUser = yield connection.query(`
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
});
const userRepository = {
    createUser,
};
export default userRepository;

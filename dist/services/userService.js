var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import userRepository from '../repository/userRepository.js';
const createNewUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield userRepository.createUser(newUser);
    const userToken = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET);
    return { token: userToken };
});
const userService = {
    createNewUser,
};
export default userService;

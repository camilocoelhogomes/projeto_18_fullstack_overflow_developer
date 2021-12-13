import userService from '../services/userService.js';
import validationService from '../services/validationService.js';
/* eslint-disable */
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }
  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const user = req.body;
    const reqError = validationService.user(user);
    if (reqError) { return res.sendStatus(400); }
    const token = yield userService.createNewUser(user);
    return res.status(201).send(token);
  } catch (error) {
    return res.sendStatus(500);
  }
});
const userController = {
  newUser,
};
export default userController;

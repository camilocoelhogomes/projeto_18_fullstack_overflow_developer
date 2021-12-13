import jwt from 'jsonwebtoken';
const userAuth = (req, res, next) => {
    var _a;
    const { questionId } = req.params;
    const userToken = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization.split('Bearer ')[1];
    if (!userToken || !questionId) {
        return res.sendStatus(401);
    }
    const decryptedUser = jwt.verify(userToken, process.env.JWT_SECRET);
    if (!decryptedUser.id)
        return res.sendStatus(401);
    req.body = Object.assign(Object.assign({}, req.body), { studentId: decryptedUser.id });
    return next();
};
export default userAuth;

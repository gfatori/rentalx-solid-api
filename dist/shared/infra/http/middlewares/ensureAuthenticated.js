"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _AppError = require("../../../../errors/AppError");

var _UsersRepository = require("../../../../modules/accounts/infra/typeorm/repositories/implementations/UsersRepository");

var _jsonwebtoken = require("jsonwebtoken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization; // const usersTokensRepository = new UsersTokensRepository();

  const usersRepository = new _UsersRepository.UsersRepository();

  if (!authHeader) {
    throw new _AppError.AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_token); // const user = await usersTokensRepository.findByUserIdAndRefreshToken(
    //   user_id,
    //   token
    // );
    // if (!user) {
    //   throw new AppError("User does not exist.", 401);
    // }

    request.user = {
      id: user_id
    };
    next();
  } catch {
    throw new _AppError.AppError("Invalid token.", 401);
  }
}
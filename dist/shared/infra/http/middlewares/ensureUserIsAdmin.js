"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureUserIsAdmin = ensureUserIsAdmin;

var _AppError = require("@errors/AppError");

var _UsersRepository = require("@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository");

async function ensureUserIsAdmin(request, response, next) {
  const {
    id
  } = request.user;
  const usersRepository = new _UsersRepository.UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user?.is_admin) {
    throw new _AppError.AppError("User is not admin.");
  }

  return next();
}
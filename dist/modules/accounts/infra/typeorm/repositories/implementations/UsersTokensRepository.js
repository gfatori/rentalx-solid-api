"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokensRepository = void 0;

var _AppError = require("../../../../../../errors/AppError");

var _typeorm = require("typeorm");

var _UserTokens = require("../../entities/UserTokens");

class UsersTokensRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_UserTokens.UserTokens);
  }

  findByUserId(user_id) {
    throw new Error("Method not implemented.");
  }

  async create({
    expires_date,
    refresh_token,
    user_id
  }) {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id
    });
    await this.repository.save(userToken);
    return userToken;
  }

  async findByUserIdAndRefreshToken(user_id, refresh_token) {
    const userTokens = await this.repository.findOne({
      user_id,
      refresh_token
    });

    if (userTokens) {
      return userTokens;
    }

    throw new _AppError.AppError("Token not found!");
  }

  async deleteById(id) {
    await this.repository.delete(id);
  }

}

exports.UsersTokensRepository = UsersTokensRepository;
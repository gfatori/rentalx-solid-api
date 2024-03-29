"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUserIsAdmin = void 0;
const AppError_1 = require("@errors/AppError");
const UsersRepository_1 = require("@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository");
function ensureUserIsAdmin(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.user;
        const usersRepository = new UsersRepository_1.UsersRepository();
        const user = yield usersRepository.findById(id);
        if (!(user === null || user === void 0 ? void 0 : user.is_admin)) {
            throw new AppError_1.AppError("User is not admin.");
        }
        return next();
    });
}
exports.ensureUserIsAdmin = ensureUserIsAdmin;

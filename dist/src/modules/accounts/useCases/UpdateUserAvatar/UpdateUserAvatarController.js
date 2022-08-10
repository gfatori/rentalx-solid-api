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
exports.UpdateUserAvatarController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateUserAvatarUseCase_1 = require("./UpdateUserAvatarUseCase");
class UpdateUserAvatarController {
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.user;
            const avatar_file = (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename;
            const updateUserAvatarUseCase = tsyringe_1.container.resolve(UpdateUserAvatarUseCase_1.UpdateUserAvatarUseCase);
            if (avatar_file) {
                yield updateUserAvatarUseCase.execute({ user_id: id, avatar_file });
            }
            return response.status(204).send();
        });
    }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;

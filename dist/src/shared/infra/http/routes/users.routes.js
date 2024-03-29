"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const upload_1 = __importDefault(require("@config/upload"));
const CreateUserController_1 = require("@modules/accounts/useCases/createUser/CreateUserController");
const UpdateUserAvatarController_1 = require("@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController");
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const uploadAvatar = (0, multer_1.default)(upload_1.default);
const createUserController = new CreateUserController_1.CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

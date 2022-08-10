"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const CreateCategoryController_1 = require("@modules/cars/useCases/createCategory/CreateCategoryController");
const ImportCategoryController_1 = require("@modules/cars/useCases/importCategory/ImportCategoryController");
const ListCategoriesController_1 = require("@modules/cars/useCases/listCategories/ListCategoriesController");
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const ensureUserIsAdmin_1 = require("../middlewares/ensureUserIsAdmin");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const upload = (0, multer_1.default)({
    dest: "./tmp",
});
const createCategoryController = new CreateCategoryController_1.CreateCategoryController();
const importCategoryController = new ImportCategoryController_1.ImportCategoryController();
const listCategoriesController = new ListCategoriesController_1.ListCategoriesController();
categoriesRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureUserIsAdmin_1.ensureUserIsAdmin, createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureUserIsAdmin_1.ensureUserIsAdmin, importCategoryController.handle);

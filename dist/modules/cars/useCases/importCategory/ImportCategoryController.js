"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCategoryController = void 0;

var _tsyringe = require("tsyringe");

var _ImportCategoryUseCase = require("./ImportCategoryUseCase");

class ImportCategoryController {
  async handle(request, response) {
    const {
      file
    } = request;

    const importCategoryUseCase = _tsyringe.container.resolve(_ImportCategoryUseCase.ImportCategoryUseCase);

    if (file) {// await importCategoryUseCase.execute(file);
    }

    return response.send();
  }

}

exports.ImportCategoryController = ImportCategoryController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCategoryUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ICategoryRepository = require("../../repositories/ICategoryRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ImportCategoryUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CategoriesRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICategoryRepository.ICategoryRepository === "undefined" ? Object : _ICategoryRepository.ICategoryRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ImportCategoryUseCase {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  } // async loadCategories(
  //   file: Express.Multer.File
  // ): Promise<ICategoryRepository> {
  //   return new Promise((resolve, reject) => {
  //     const stream = fs.createReadStream(file.path);
  //     const categories: IImportCategory[] = [];
  //     const parseFile = csvParse();
  //     stream.pipe(parseFile);
  //     parseFile
  //       .on("data", async (line) => {
  //         const [name, description] = line;
  //         categories.push({
  //           name,
  //           description,
  //         });
  //       })
  //       .on("end", () => {
  //         fs.promises.unlink("");
  //         resolve(categories);
  //       })
  //       .on("error", (err) => {
  //         reject(err);
  //       });
  //   });
  // }
  // async execute(file: Express.Multer.File): Promise<void> {
  //   const categories = await this.loadCategories(file);
  //   categories.map(async (category) => {
  //     const { name, description } = category;
  //     const existCategory = await this.categoriesRepository.findByName(name);
  //     if (!existCategory) {
  //       await this.categoriesRepository.create({
  //         name,
  //         description,
  //       });
  //     }
  //   });
  // }


}) || _class) || _class) || _class) || _class);
exports.ImportCategoryUseCase = ImportCategoryUseCase;
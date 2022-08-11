"use strict";

var _AppError = require("../../../../errors/AppError");

var _CategoriesRepositoryInMemory = require("../../repositories/in-memory/CategoriesRepositoryInMemory");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

let createCategoryUseCase;
let categoriesRepositoryInMemory;
describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new _CategoriesRepositoryInMemory.CategoriesRepositoryInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Test description"
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty("id");
  });
  it("should not be able to create a category that already exists.", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Test description"
      };
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
});
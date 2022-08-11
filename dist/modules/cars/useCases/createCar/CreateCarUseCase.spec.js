"use strict";

var _AppError = require("../../../../errors/AppError");

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");

var _CreateCarUseCase = require("./CreateCarUseCase");

let createCarUseCase;
let carsRepositoryInMemory;
describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    createCarUseCase = new _CreateCarUseCase.CreateCarUseCase(carsRepositoryInMemory);
  });
  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Uno",
      description: "Carrinho caixa de fosforo",
      daily_rate: 10,
      license_plate: "AAA3333",
      fine_amount: 1000,
      brand: "Fiat",
      category_id: "category",
      specifications: []
    });
    expect(car).toHaveProperty("id");
  });
  it("should not be able to create a car that already exists.", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Uno",
        description: "Carrinho caixa de fosforo",
        daily_rate: 10,
        license_plate: "AAA3333",
        fine_amount: 1000,
        brand: "Fiat",
        category_id: "category",
        specifications: []
      });
      await createCarUseCase.execute({
        name: "Car 2",
        description: "outro caixa de fosforo",
        daily_rate: 10,
        license_plate: "AAA3333",
        fine_amount: 10020,
        brand: "Fiatinho",
        category_id: "category",
        specifications: []
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("should be able to create a car with availability true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "outro caixa de fosforo",
      daily_rate: 10,
      license_plate: "ABA3333",
      fine_amount: 10020,
      brand: "Fiatinho",
      category_id: "category",
      specifications: []
    });
    expect(car.available).toBe(true);
  });
});
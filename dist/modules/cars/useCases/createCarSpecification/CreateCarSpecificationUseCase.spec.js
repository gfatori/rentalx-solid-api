"use strict";

var _AppError = require("@errors/AppError");

var _CarsRepositoryInMemory = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");

var _SpecificationRepositoryInMemory = require("@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

let createCarSpecificationUseCase;
let carsRepositoryInMemory;
let specificationsRepositoryInMemory;
describe("Create  car specification", () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new _SpecificationRepositoryInMemory.SpecificationRepositoryInMemory();
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    createCarSpecificationUseCase = new _CreateCarSpecificationUseCase.CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
  });
  it("should be able to add a new specification to a car", async () => {
    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test"
    });
    const specifications_id = [specification.id];
    const car = await carsRepositoryInMemory.create({
      name: "Uno",
      description: "Carrinho caixa de fosforo",
      daily_rate: 10,
      license_plate: "AAA3333",
      fine_amount: 1000,
      brand: "Fiat",
      category_id: "category",
      specifications: []
    });
    const specificationCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: specifications_id
    });
    console.log(specificationCars);
    expect(specificationCars).toHaveProperty("specifications");
    expect(specificationCars.specifications.length).toBe(1);
  });
  it("should not be able to add a new specification to a non existing car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["54321"];
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
});
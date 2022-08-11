"use strict";

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");

var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");

let listAvailableCarsUseCase;
let carsRepositoryInMemory;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    listAvailableCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand",
      category_id: "61164a4d-891e-4178-9760-a0f2f8e42be6",
      daily_rate: 100.0,
      description: "carro legal",
      fine_amount: 1000.0,
      license_plate: "aaa3332",
      name: "carrinho",
      specifications: []
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toHaveLength(1);
    expect(cars).toEqual([car]);
  });
  it("it should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "61164a4d-891e-4178-9760-a0f2f8e42be6",
      daily_rate: 100.0,
      description: "carro legal",
      fine_amount: 1000.0,
      license_plate: "aaa3332",
      name: "carrinho",
      specifications: []
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "carrinho"
    });
    expect(cars).toEqual([car]);
  });
  it("it should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "61164a4d-891e-4178-9760-a0f2f8e42be6",
      daily_rate: 100.0,
      description: "carro legal",
      fine_amount: 1000.0,
      license_plate: "aaa3332",
      name: "carrinho",
      specifications: []
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test"
    });
    expect(cars).toEqual([car]);
  });
  it("it should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "12345",
      daily_rate: 100.0,
      description: "carro legal",
      fine_amount: 1000.0,
      license_plate: "aaa3332",
      name: "carrinho",
      specifications: []
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345"
    });
    expect(cars).toEqual([car]);
  });
});
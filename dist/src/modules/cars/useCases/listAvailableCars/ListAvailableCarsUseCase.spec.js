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
const CarsRepositoryInMemory_1 = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");
const ListAvailableCarsUseCase_1 = require("./ListAvailableCarsUseCase");
let listAvailableCarsUseCase;
let carsRepositoryInMemory;
describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory_1.CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase_1.ListAvailableCarsUseCase(carsRepositoryInMemory);
    });
    it("should be able to list all available cars", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield carsRepositoryInMemory.create({
            brand: "Car_brand",
            category_id: "61164a4d-891e-4178-9760-a0f2f8e42be6",
            daily_rate: 100.0,
            description: "carro legal",
            fine_amount: 1000.0,
            license_plate: "aaa3332",
            name: "carrinho",
            specifications: [],
        });
        const cars = yield listAvailableCarsUseCase.execute({});
        expect(cars).toHaveLength(1);
        expect(cars).toEqual([car]);
    }));
    it("it should be able to list all available cars by name", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "61164a4d-891e-4178-9760-a0f2f8e42be6",
            daily_rate: 100.0,
            description: "carro legal",
            fine_amount: 1000.0,
            license_plate: "aaa3332",
            name: "carrinho",
            specifications: [],
        });
        const cars = yield listAvailableCarsUseCase.execute({
            name: "carrinho",
        });
        expect(cars).toEqual([car]);
    }));
    it("it should be able to list all available cars by brand", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "61164a4d-891e-4178-9760-a0f2f8e42be6",
            daily_rate: 100.0,
            description: "carro legal",
            fine_amount: 1000.0,
            license_plate: "aaa3332",
            name: "carrinho",
            specifications: [],
        });
        const cars = yield listAvailableCarsUseCase.execute({
            brand: "Car_brand_test",
        });
        expect(cars).toEqual([car]);
    }));
    it("it should be able to list all available cars by category", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "12345",
            daily_rate: 100.0,
            description: "carro legal",
            fine_amount: 1000.0,
            license_plate: "aaa3332",
            name: "carrinho",
            specifications: [],
        });
        const cars = yield listAvailableCarsUseCase.execute({
            category_id: "12345",
        });
        expect(cars).toEqual([car]);
    }));
});

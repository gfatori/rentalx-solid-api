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
const AppError_1 = require("@errors/AppError");
const CarsRepositoryInMemory_1 = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");
const CreateCarUseCase_1 = require("./CreateCarUseCase");
let createCarUseCase;
let carsRepositoryInMemory;
describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory_1.CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase_1.CreateCarUseCase(carsRepositoryInMemory);
    });
    it("should be able to create a new car", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield createCarUseCase.execute({
            name: "Uno",
            description: "Carrinho caixa de fosforo",
            daily_rate: 10,
            license_plate: "AAA3333",
            fine_amount: 1000,
            brand: "Fiat",
            category_id: "category",
            specifications: [],
        });
        expect(car).toHaveProperty("id");
    }));
    it("should not be able to create a car that already exists.", () => {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield createCarUseCase.execute({
                name: "Uno",
                description: "Carrinho caixa de fosforo",
                daily_rate: 10,
                license_plate: "AAA3333",
                fine_amount: 1000,
                brand: "Fiat",
                category_id: "category",
                specifications: [],
            });
            yield createCarUseCase.execute({
                name: "Car 2",
                description: "outro caixa de fosforo",
                daily_rate: 10,
                license_plate: "AAA3333",
                fine_amount: 10020,
                brand: "Fiatinho",
                category_id: "category",
                specifications: [],
            });
        })).rejects.toBeInstanceOf(AppError_1.AppError);
    });
    it("should be able to create a car with availability true by default", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield createCarUseCase.execute({
            name: "Car Available",
            description: "outro caixa de fosforo",
            daily_rate: 10,
            license_plate: "ABA3333",
            fine_amount: 10020,
            brand: "Fiatinho",
            category_id: "category",
            specifications: [],
        });
        expect(car.available).toBe(true);
    }));
});

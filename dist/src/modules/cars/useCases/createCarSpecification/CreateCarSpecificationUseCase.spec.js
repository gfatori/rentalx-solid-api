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
const SpecificationRepositoryInMemory_1 = require("@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory");
const CreateCarSpecificationUseCase_1 = require("./CreateCarSpecificationUseCase");
let createCarSpecificationUseCase;
let carsRepositoryInMemory;
let specificationsRepositoryInMemory;
describe("Create  car specification", () => {
    beforeEach(() => {
        specificationsRepositoryInMemory = new SpecificationRepositoryInMemory_1.SpecificationRepositoryInMemory();
        carsRepositoryInMemory = new CarsRepositoryInMemory_1.CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase_1.CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
    });
    it("should be able to add a new specification to a car", () => __awaiter(void 0, void 0, void 0, function* () {
        const specification = yield specificationsRepositoryInMemory.create({
            description: "test",
            name: "test",
        });
        const specifications_id = [specification.id];
        const car = yield carsRepositoryInMemory.create({
            name: "Uno",
            description: "Carrinho caixa de fosforo",
            daily_rate: 10,
            license_plate: "AAA3333",
            fine_amount: 1000,
            brand: "Fiat",
            category_id: "category",
            specifications: [],
        });
        const specificationCars = yield createCarSpecificationUseCase.execute({
            car_id: car.id,
            specifications_id: specifications_id,
        });
        console.log(specificationCars);
        expect(specificationCars).toHaveProperty("specifications");
        expect(specificationCars.specifications.length).toBe(1);
    }));
    it("should not be able to add a new specification to a non existing car", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            const car_id = "1234";
            const specifications_id = ["54321"];
            yield createCarSpecificationUseCase.execute({
                car_id,
                specifications_id,
            });
        })).rejects.toBeInstanceOf(AppError_1.AppError);
    }));
});

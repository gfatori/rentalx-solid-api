"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersRepository_1 = require("@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository");
const UsersTokensRepository_1 = require("@modules/accounts/infra/typeorm/repositories/implementations/UsersTokensRepository");
const CarsRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsRepository");
const CategoriesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CategoriesRepository");
const SpecificationRepository_1 = require("@modules/cars/infra/typeorm/repositories/SpecificationRepository");
const tsyringe_1 = require("tsyringe");
const DayjsDateProvider_1 = require("./providers/DateProvider/implementations/DayjsDateProvider");
const LocalstorageProvider_1 = require("./providers/StorageProvider/implementations/LocalstorageProvider");
const S3StorageProvider_1 = require("./providers/StorageProvider/implementations/S3StorageProvider");
tsyringe_1.container.registerSingleton("CategoriesRepository", CategoriesRepository_1.CategoriesRepository);
tsyringe_1.container.registerSingleton("SpecificationsRepository", SpecificationRepository_1.SpecificationRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("UsersTokensRepository", UsersTokensRepository_1.UsersTokensRepository);
tsyringe_1.container.registerSingleton("CarsRepository", CarsRepository_1.CarsRepository);
tsyringe_1.container.registerSingleton("DayjsDateProvider", DayjsDateProvider_1.DayjsDateProvider);
const diskStorage = {
    local: LocalstorageProvider_1.LocalStorageProvider,
    s3: S3StorageProvider_1.S3StorageProvider,
};
tsyringe_1.container.registerSingleton("StorageProvider", S3StorageProvider_1.S3StorageProvider);

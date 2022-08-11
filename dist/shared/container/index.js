"use strict";

var _UsersRepository = require("@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository");

var _UsersTokensRepository = require("@modules/accounts/infra/typeorm/repositories/implementations/UsersTokensRepository");

var _CarsRepository = require("@modules/cars/infra/typeorm/repositories/CarsRepository");

var _CategoriesRepository = require("@modules/cars/infra/typeorm/repositories/CategoriesRepository");

var _SpecificationRepository = require("@modules/cars/infra/typeorm/repositories/SpecificationRepository");

var _tsyringe = require("tsyringe");

var _DayjsDateProvider = require("./providers/DateProvider/implementations/DayjsDateProvider");

var _LocalstorageProvider = require("./providers/StorageProvider/implementations/LocalstorageProvider");

var _S3StorageProvider = require("./providers/StorageProvider/implementations/S3StorageProvider");

_tsyringe.container.registerSingleton("CategoriesRepository", _CategoriesRepository.CategoriesRepository);

_tsyringe.container.registerSingleton("SpecificationsRepository", _SpecificationRepository.SpecificationRepository);

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton("UsersTokensRepository", _UsersTokensRepository.UsersTokensRepository);

_tsyringe.container.registerSingleton("CarsRepository", _CarsRepository.CarsRepository);

_tsyringe.container.registerSingleton("DayjsDateProvider", _DayjsDateProvider.DayjsDateProvider);

const diskStorage = {
  local: _LocalstorageProvider.LocalStorageProvider,
  s3: _S3StorageProvider.S3StorageProvider
};

_tsyringe.container.registerSingleton("StorageProvider", _S3StorageProvider.S3StorageProvider);
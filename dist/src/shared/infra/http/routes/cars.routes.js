"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRoutes = void 0;
const CreateCarController_1 = require("@modules/cars/useCases/createCar/CreateCarController");
const CreateCarSpecificationController_1 = require("@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController");
const listAvailableCarsController_1 = require("@modules/cars/useCases/listAvailableCars/listAvailableCarsController");
const express_1 = require("express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const ensureUserIsAdmin_1 = require("../middlewares/ensureUserIsAdmin");
const carsRoutes = (0, express_1.Router)();
exports.carsRoutes = carsRoutes;
const createCarController = new CreateCarController_1.CreateCarController();
const listAvailableCarsController = new listAvailableCarsController_1.ListAvailableCarsController();
const createCarsSpecificationController = new CreateCarSpecificationController_1.CreateCarSpecificationController();
carsRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureUserIsAdmin_1.ensureUserIsAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", ensureAuthenticated_1.ensureAuthenticated, ensureUserIsAdmin_1.ensureUserIsAdmin, createCarsSpecificationController.handle);

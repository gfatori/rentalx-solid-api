"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carsRoutes = void 0;

var _CreateCarController = require("@modules/cars/useCases/createCar/CreateCarController");

var _CreateCarSpecificationController = require("@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController");

var _listAvailableCarsController = require("@modules/cars/useCases/listAvailableCars/listAvailableCarsController");

var _express = require("express");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _ensureUserIsAdmin = require("../middlewares/ensureUserIsAdmin");

const carsRoutes = (0, _express.Router)();
exports.carsRoutes = carsRoutes;
const createCarController = new _CreateCarController.CreateCarController();
const listAvailableCarsController = new _listAvailableCarsController.ListAvailableCarsController();
const createCarsSpecificationController = new _CreateCarSpecificationController.CreateCarSpecificationController();
carsRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureUserIsAdmin.ensureUserIsAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", _ensureAuthenticated.ensureAuthenticated, _ensureUserIsAdmin.ensureUserIsAdmin, createCarsSpecificationController.handle);
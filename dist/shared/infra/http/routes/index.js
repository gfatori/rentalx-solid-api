"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _authenticate = require("./authenticate.routes");

var _cars = require("./cars.routes");

var _categories = require("./categories.routes");

var _specification = require("./specification.routes");

var _users = require("./users.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use("/categories", _categories.categoriesRoutes);
router.use("/specifications", _specification.specificationsRoutes);
router.use("/users", _users.usersRoutes);
router.use(_authenticate.authenticateRoutes);
router.use("/cars", _cars.carsRoutes);
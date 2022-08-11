"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("@errors/AppError");
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const index_1 = __importDefault(require("@database/index"));
const swagger_json_1 = __importDefault(require("../../../swagger.json"));
const routes_1 = require("./routes");
require("@shared/container");
(0, index_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});
app.listen(3333, () => console.log("Server started on port 3333"));

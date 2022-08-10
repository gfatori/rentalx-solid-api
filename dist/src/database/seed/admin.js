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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@database/index"));
const bcrypt_1 = require("bcrypt");
// import { getConnection } from "typeorm";
const uuid_1 = require("uuid");
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = (0, index_1.default)("localhost");
        const id = (0, uuid_1.v4)();
        const password = yield (0, bcrypt_1.hash)("admin", 8);
        yield (yield connection)
            .query(`INSERT INTO USERS(id, name, email, driver_license, password, is_admin, created_at )
            values('${id}', 'admin', 'admin@admin.com.br','BBB3333', '${password}', true, 'now()')
          `);
    });
}
create().then(() => console.log("User admin created!"));

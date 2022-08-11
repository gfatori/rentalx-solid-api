"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCategory1656358679921 = void 0;

var _typeorm = require("typeorm");

class CreateCategory1656358679921 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "categories",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "description",
        type: "varchar"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("categories");
  }

}

exports.CreateCategory1656358679921 = CreateCategory1656358679921;
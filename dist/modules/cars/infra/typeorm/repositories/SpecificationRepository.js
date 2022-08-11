"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationRepository = void 0;

var _Specification = require("../entities/Specification");

var _typeorm = require("typeorm");

class SpecificationRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Specification.Specification);
  }

  async findByIds(ids) {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }

  async create({
    description,
    name
  }) {
    const specification = this.repository.create({
      description,
      name
    });
    await this.repository.save(specification);
    return specification;
  }

  async findByName(name) {
    const specification = await this.repository.findOne({
      name
    });
    return specification;
  }

}

exports.SpecificationRepository = SpecificationRepository;
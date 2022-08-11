"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

// interface IOptions {
//   host: string;
// }
// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "database"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });
var _default = async (host = "database") => {
  const defaultOptions = await (0, _typeorm.getConnectionOptions)();
  return (0, _typeorm.createConnection)(Object.assign(defaultOptions, {
    host
  }));
};

exports.default = _default;
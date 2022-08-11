"use strict";

var _ = _interopRequireDefault(require("./.."));

var _bcrypt = require("bcrypt");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { getConnection } from "typeorm";
async function create() {
  const connection = (0, _.default)("localhost");
  const id = (0, _uuid.v4)();
  const password = await (0, _bcrypt.hash)("admin", 8);
  await (await connection).query(`INSERT INTO USERS(id, name, email, driver_license, password, is_admin, created_at )
            values('${id}', 'admin', 'admin@admin.com.br','BBB3333', '${password}', true, 'now()')
          `);
}

create().then(() => console.log("User admin created!"));
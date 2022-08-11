import createConnection from "@database/index";
import { hash } from "bcrypt";
// import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function create() {
  const connection = createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await (
    await connection
  )
    .query(`INSERT INTO USERS(id, name, email, driver_license, password, is_admin, created_at )
            values('${id}', 'admin', 'admin@admin.com.br','BBB3333', '${password}', true, 'now()')
          `);
}

create().then(() => console.log("User admin created!"));

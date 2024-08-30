const postgre = require("postgres");

require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgre({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

module.exports = sql;

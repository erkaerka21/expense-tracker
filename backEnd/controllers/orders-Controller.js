const sql = require("../config/db-user");

const getOrders = async (req, res) => {
  const watchOrders = await sql`SELECT * FROM recorduud`;
  res
    .status(200)
    .json({ message: "recorduud haragdaj baina", record: watchOrders });
};
module.exports = { getOrders };

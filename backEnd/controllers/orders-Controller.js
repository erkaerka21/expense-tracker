const sql = require("../config/db-user");

const getOrders = async (req, res) => {
  const watchOrders = await sql`SELECT * FROM recorduud`;
  res
    .status(200)
    .json({ message: "recorduud haragdaj baina", record: watchOrders });
};
const createOrder = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  const postOrders =
    await sql`INSERT INTO recorduud (uid, cid, name, amount, transaction_type, description)
VALUES(${uid},${cid},${name},${amount},${transaction_type},${description});`;
  res
    .status(201)
    .json({ message: "record amjilttai uussen", record: postOrders });
};
const editOrder = async (req, res) => {
  const { id } = req.params;
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  const putOrder =
    await sql`UPDATE recorduud SET uid=${uid}, cid=${cid}, name=${name}, amount=${amount}, transaction_type=${transaction_type}, description=${description} WHERE id=${id};`;
  res
    .status(200)
    .json({ message: "orderiig amjilttai uurchilsun", record: putOrder });
};
module.exports = { getOrders, createOrder, editOrder };

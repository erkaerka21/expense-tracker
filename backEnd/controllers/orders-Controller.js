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
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const deleteOrder = await sql`DELETE FROM recorduud WHERE id=${id};`;
  res.status(204).json({ message: "amjilttai ustgasan", record: deleteOrder });
};
const getRecordinfo = async (req, res) => {
  try {
    const [inc, exp] =
      await sql`SELECT transaction_type, SUM(amount) FROM recorduud GROUP BY transaction_type;`;
    res.status(200).json({ inc, exp });
  } catch (error) {
    res.status(400).json({ message: "failed" });
  }
};
module.exports = {
  getOrders,
  createOrder,
  editOrder,
  deleteOrder,
  getRecordinfo,
};

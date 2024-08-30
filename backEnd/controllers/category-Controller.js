const sql = require("../config/db-user");

const getCategory = async (req, res) => {
  const dataCategory = await sql`SELECT * FROM categoriud;`;
  console.log("get category harah : ", dataCategory);
  res
    .status(200)
    .json({ message: "get category amjilttai", category: dataCategory });
};
const createCategory = async (req, res) => {
  const { name, description, category_img } = req.body;
  const postCategory =
    await sql`INSERT INTO categoriud(name, description, category_img)
VALUES (${name},${description},${category_img});`;
  console.log("post category amjilttai : ", postCategory);
  res.status(201).json({ message: "create amjilttai", category: postCategory });
};
const editCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, category_img } = req.body;
  const editCategoryData =
    await sql`UPDATE categoriud SET name=${name}, description=${description}, category_img=${category_img} WHERE id=${id};`;
  console.log("category datag amjilttai uurchilsun : ", editCategoryData);
  res
    .status(200)
    .json({ message: "amjilttai uurchilsun : ", category: editCategoryData });
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const deleteCategory = await sql`DELETE FROM categoriud WHERE id=${id}`;
  res
    .status(200)
    .json({ message: "amjilttai ustgasan", category: deleteCategory });
};
module.exports = { getCategory, createCategory, editCategory, deleteCategory };

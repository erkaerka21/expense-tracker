const sqlUser = require("../config/db-user");

const getUsers = async (req, res) => {
  //   console.log("very success");
  const dataUser = await sqlUser`SELECT * FROM users`;
  console.log("get data harah : ", dataUser);
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("GET harah ajillaj bga eseh : ", userData);
  res.status(200).json({ message: "GET success", user: dataUser });
};
const postUser = async (req, res) => {
  const { email, name, password, avatar_img } = req.body;
  const postUser =
    await sqlUser`INSERT INTO users(email, name, password, avatar_img) VALUES(${email},${name},${password},${avatar_img});`;
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  console.log("POST harah ajillaj bga eseh : ", postUser);
  res.status(201).json({ message: "post amjilttai", user: postUser });
};
const editUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, password, avatar_img } = req.body;
  const editUser =
    await sqlUser`UPDATE users SET email=${email},name=${name},password=${password},avatar_img=${avatar_img} WHERE id=${id};`;
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  console.log("EDIT harah ajillaj bga eseh : ", editUser);
  res.status(200).json({ message: "edit amjilttai", user: editUser });
};
const deleteUser = async (req, res) => {
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("DELETE harah ajillaj bga eseh : ", userData);
  // res.status(200).json({ userData });
};
module.exports = { getUsers, postUser, editUser, deleteUser };

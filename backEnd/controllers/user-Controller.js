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
  const postUser =
    await sqlUser`INSERT INTO users(email, name, password, avatar_img) VALUES('naraa@yahoo.com','Naran','14223333d','https://www.parliament.mn/files/589971694cd748a582718307ca063ce9?d=0');`;
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("POST harah ajillaj bga eseh : ", userData);
  res.status(201).json({ message: "post amjilttai", user: postUser });
};
const editUser = async (req, res) => {
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("PUT harah ajillaj bga eseh : ", userData);
  // res.status(400).json({ message: "not found" });
};
const deleteUser = async (req, res) => {
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("DELETE harah ajillaj bga eseh : ", userData);
  // res.status(200).json({ userData });
};
module.exports = { getUsers, postUser, editUser, deleteUser };

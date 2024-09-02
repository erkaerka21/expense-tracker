const sql = require("express");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const signInUser = await sql`SELECT * FROM users WHERE email=${email}`;
  res.status(200).json({
    message: "хэрэглэгчийг амжилттай нэвтрүүллээ",
    signIn: signInUser,
  });
};

const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = bcrypt;
  const logInUser =
    await sql`INSERT INTO users(email, name, password, avatar_img) VALUES(${email},${name},${password},"hereglegchiin zurag";`;
  res
    .status(201)
    .json({ message: "хэрэглэгчийг амжилттай бүртгэлээ", signUp: logInUser });
};

module.exports = { signIn, signUp };

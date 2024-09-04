const sql = require("../config/db-user");
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const logInUser =
    await sql`INSERT INTO users(email, name, password, avatar_img) VALUES(${email},${name},${hashedPassword},'hereglegchiin zurag');`;
  res
    .status(201)
    .json({ message: "хэрэглэгчийг амжилттай бүртгэлээ", user: logInUser });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const [signInUser] = await sql`SELECT * FROM users WHERE email=${email};`;
  if (!signInUser) {
    res.status(404).json({
      message: "бүртгэлгүй хэрэглэгч байна, бүртгүүлнэ үү",
    });
  } else {
    const isUserCheck = bcrypt.compareSync(password, signInUser.password);
    if (!isUserCheck) {
      res.status(400).json({
        message: "нэвтрэх нэр эсвэл нууц үг буруу байна.",
      });
    } else {
      const token = jsonWebToken.sign(
        { id: signInUser.id },
        "TOKEN-PASS-!300420",
        { expiresIn: "1h" }
      );
      res.status(200).json({ message: "амжилттай нэвтрэх гэж байна", token });
    }
  }
};
module.exports = { signIn, signUp };

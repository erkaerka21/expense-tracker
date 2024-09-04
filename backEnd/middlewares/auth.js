const jsonWebToken = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    res
      .status(401)
      .json({
        message: "зөвхөн нэвтэрсэн хэрэглэгч дараах үйлдлийг хийж болно",
      });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jsonWebToken.verify(token, "TOKEN-PASS-!300420");
  req.user = user;
  next();
};
module.exports = auth;

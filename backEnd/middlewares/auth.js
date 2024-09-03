const jsonWebToken = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  //   console.log("нэвтэрсэн эсэхийг шалгах", next());
  if (!req.headers.authorization) {
    console.log(
      "Зөвхөн нэвтэрсэн хэрэглэгч дараах үйлдлийг хийж болно.",
      next()
    );
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jsonWebToken.verify(token, "TOKEN-PASS-!300420");
  next();
};

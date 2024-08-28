const express = require("express"); //middleware d tulguurlaj ajilladag. Middleware ni hereglegch talaas huselt irlee hariu ireh hurtel gold ni ajillaj bga functionuudiig helne. Requestees Response hurtel.
//express iin middleware ni request irlee, 1. cors mw, 2. csr daraagiin function ruu orohdoo avtomataar response butsaadag.
const dotenv = require("dotenv");
dotenv.config(); //.env tei file uudtai ajilladag. config .env file iig duudaj ajillasanaar process.env.PORT ajillana.
const fs = require("fs"); //fs=file system
const cors = require("cors"); //cors iig yamar ued aldaa gardagiig haih
const { logger } = require("./middlewares/logger");
const app = express();
const PORT = process.env.PORT; //zuvhun ajillaj baih ued portiig avna.
app.use(express.json()); // middleware client talaas body dotor irj json iig object bolgono.
app.use(cors()); //haanaas ch handaj bolno widdleware. haanaas ch manin server ruu handaj bolno.
app.use(logger());

app.get("/users", (req, res) => {
  console.log("very success");
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("GET harah ajillaj bga eseh : ", userData);
  res.json({ message: "GET success" });
});
app.post("/users", (req, res) => {
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("POST harah ajillaj bga eseh : ", userData);
  // res.status(201).json({ userData });
});
app.put("/user:id", (req, res) => {
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("PUT harah ajillaj bga eseh : ", userData);
  // res.status(400).json({ message: "not found" });
});
app.delete("user/:id", (req, res) => {
  // const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // const userData = JSON.parse(data);
  // console.log("DELETE harah ajillaj bga eseh : ", userData);
  // res.status(200).json({ userData });
});
app.listen(PORT, () => {
  console.log(`server iin ajillaj bga host ${PORT}`);
});

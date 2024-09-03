const express = require("express"); //middleware d tulguurlaj ajilladag. Middleware ni hereglegch talaas huselt irlee hariu ireh hurtel gold ni ajillaj bga functionuudiig helne. Requestees Response hurtel.
//express iin middleware ni request irlee, 1. cors mw, 2. csr daraagiin function ruu orohdoo avtomataar response butsaadag.
const dotenv = require("dotenv");
const fs = require("fs"); //fs=file system
const cors = require("cors"); //cors iig yamar ued aldaa gardagiig haih
const { logger } = require("./middlewares/logger");
dotenv.config(); //.env tei file uudtai ajilladag. config .env file iig duudaj ajillasanaar process.env.PORT ajillana.

const userRouter = require("./routes/user-route");
const categoryRouter = require("./routes/category-route");
const ordersRouter = require("./routes/orders-route");
const authRouter = require("./routes/auth-route");
const PORT = process.env.PORT; //zuvhun ajillaj baih ued portiig avna.

const app = express(); // json data g object bolgon requestiin body ruu oruuldag.

app.use(express.json()); // middleware client talaas body dotor irj json iig object bolgono.
app.use(cors()); //local host hedees ch handaj bolno widdleware. haanaas ch manin server ruu handaj bolno.
app.use(logger());

app.use("/users", userRouter);
app.use("/categoriud", categoryRouter);
app.use("/orderuud", ordersRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server iin ajillaj bga host ${PORT}`);
});

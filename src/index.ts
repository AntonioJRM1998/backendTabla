import express from "express";
import userRoutes from './routers/user.routes'
import cryptoRoutes from './routers/crypto.routes'
import cryptoUsersRoutes from './routers/crypto-user.routes'
import logger from './utils/logger'

const app = express();
var cors = require("cors");

app.use(express.json());

const PORT = 9000;

app.use(cors());

app.use("/user",userRoutes)
app.use("/crypto",cryptoRoutes)
app.use("/crypto-user",cryptoUsersRoutes)


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puesto"${PORT}`);
  logger.info(`Servidor escuchando en el puesto"${PORT}`)
});


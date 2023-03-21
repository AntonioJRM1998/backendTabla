import express from "express";
import userRoutes from './routers/user.routes'

const app = express();
var cors = require("cors");

app.use(express.json());

const PORT = 8532;

app.use(cors());

app.get("/ping", (_req, res) => {
  console.log("Se ha hecho ping");
  const MESSAGE: string = "pong";
  res.send(MESSAGE);
});
app.use("/tabla",userRoutes)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puesto"${PORT}`);
});


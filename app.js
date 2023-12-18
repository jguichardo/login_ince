import express from "express";
import config from "./config";

const app = express();

// 2- Seteamos urlencoded para capturar los datos del formulario.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3 - Directorio public
app.use("/resources", express.static("/public"));

app.get("/", (req, res) => {
  res.send("<h1>Bienvendio a la Universidad INCE</h1>");
});

app.listen(config.port, (req, res) => {
  console.log(`Servidor esta corriendo:http://localhost:${config.port}`);
});

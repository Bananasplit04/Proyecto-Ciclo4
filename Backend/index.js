require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const connection = require("./db");
const Pedidos = require("./routes/pedidos");
const Auth = require("./routes/auth");
const privateRoutes = require("./routes/privateRoutes");
const logger = require("morgan");

// Conexion a la base de datos
connection();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(logger());
// routes
app.use("/api", Auth);
app.use("/api/pedidos", Pedidos);
app.use("/private", privateRoutes);
// puerto
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Corriendo en http://127.0.0.1:${port}`));

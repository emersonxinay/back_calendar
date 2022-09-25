const express = require("express");
//requiere o hace petición de variables de entorno
require("dotenv").config();

// // con esto se podra ver desde consola todos los variables de entorno
// console.log(process.env);

// crear el servidor del express
const app = express();

// la carpeta publica

app.use(express.static("public"));

// //rutas
// app.get("/", (req, res) => {
//   console.log("se requiere /");
//   res.json({
//     ok: true,
//   });
// });

// escuchar peticiones

// // la forma normal de hacer las peticiones
// app.listen(4000, () => {
//   console.log(`Servidor corriendo en puerto: ${4000} `);
// });

// la forma pro de llamar las peticiones con variable de entorno
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en le puerto: ${process.env.PORT}`);
});

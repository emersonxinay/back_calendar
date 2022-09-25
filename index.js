const express = require("express");

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
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto: ${4000} `);
});

const express = require('express');
//requiere o hace petición de variables de entorno
require('dotenv').config();
const { dbConection } = require('./database/config');

// // con esto se podra ver desde consola todos los variables de entorno
// console.log(process.env);

// crear el servidor del express
const app = express();

// base de datos
dbConection();

// la carpeta publica

app.use(express.static('public'));

// lectura y parseo de datos

app.use(express.json());

// //rutas
app.use('/api/auth', require('./routes/auth'));

// escuchar peticiones

// // la forma normal de hacer las peticiones
// app.listen(4000, () => {
//   console.log(`Servidor corriendo en puerto: ${4000} `);
// });

// la forma pro de llamar las peticiones con variable de entorno
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en le puerto: ${process.env.PORT}`);
});

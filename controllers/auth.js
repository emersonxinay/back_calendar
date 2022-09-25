// // primera forma de hacerlo
// const express = require('express');

// segunda forma de hacerlo
const { response } = require('express');

// // primera forma de hacer
// const crearUsuario = (req, res = express.response) => {
//   res.json({
//     ok: true,
//     msg: 'registro',
//   });
// };

// segunda forma de hacerlo = la correcta
const crearUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'registro',
  });
};

const loginUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login',
  });
};

const tokenUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'token',
  });
};

// exportamos usuarios como objetos
module.exports = {
  crearUsuario,
  loginUsuario,
  tokenUsuario,
};

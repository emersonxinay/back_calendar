// // primera forma de hacerlo
// const express = require('express');

// segunda forma de hacerlo
const { response } = require('express');
const { validationResult } = require('express-validator');

// // primera forma de hacer
// const crearUsuario = (req, res = express.response) => {
//   res.json({
//     ok: true,
//     msg: 'registro',
//   });
// };

// segunda forma de hacerlo = la correcta
const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  // // validacion  de forma rudimentaria
  // if (name.length < 5) {
  //   return res.status(400).json({
  //     ok: false,
  //     msg: 'El nombre tiene que tener mas de 5 caracteres',
  //   });
  // }

  // manejo de error  o validación de forma correcta
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(200).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  // manejo de error  o validación de forma correcta
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(200).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const tokenUsuario = (req, res = response) => {
  const { token } = req.body;

  res.status(200).json({
    ok: true,
    msg: 'token',
    token,
  });
};

// exportamos usuarios como objetos
module.exports = {
  crearUsuario,
  loginUsuario,
  tokenUsuario,
};

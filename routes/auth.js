// rutas de usuarios / auth
// host + api/auth
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const {
  crearUsuario,
  loginUsuario,
  tokenUsuario,
} = require('../controllers/auth');

router.post(
  '/new',
  [
    // midlewares
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),
    check('password', 'password minimo de 6 caracteres obligatorio').isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  '/login',
  [
    // midlewares
    check('email', 'email obligatorio').isEmail(),
    check('password', 'password minimo de 6 caracteres obligatorio').isLength({
      min: 6,
    }),
  ],
  loginUsuario
);

router.get(
  '/token',
  [
    // midlewares
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),
    check('password', 'password minimo de 6 caracteres obligatorio').isLength({
      min: 6,
    }),
  ],
  tokenUsuario
);

// para exportar
module.exports = router;

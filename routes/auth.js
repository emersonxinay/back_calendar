// rutas de usuarios / auth
// host + api/auth
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require('../controllers/auth');
const router = Router();

router.post(
  '/new',
  [
    // midlewares
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),
    check('password', 'password minimo de 6 caracteres obligatorio').isLength({
      min: 6,
    }),
    validarCampos,
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
    validarCampos,
  ],
  loginUsuario
);

router.get('/token', revalidarToken);

// para exportar
module.exports = router;

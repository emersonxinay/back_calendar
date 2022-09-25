// rutas de usuarios / auth
// host + api/auth
const { Router } = require('express');
const router = Router();
const {
  crearUsuario,
  loginUsuario,
  tokenUsuario,
} = require('../controllers/auth');

router.post('/new', crearUsuario);

router.get('/login', loginUsuario);

router.get('/token', tokenUsuario);

// para exportar
module.exports = router;

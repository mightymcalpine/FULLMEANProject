const userController = require('../../controllers/user');
const router = require('express').Router();

module.exports = router
  .post('/login',userController.login)
  .delete('/logout',userController.logout);

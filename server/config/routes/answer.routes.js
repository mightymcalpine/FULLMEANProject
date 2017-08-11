const answerController = require('../../controllers/answer');
const router = require('express').Router();

module.exports = router
  .get('/show',answerController.index)
  .get('/show/:id',answerController.show)
  .put('/update/:id',answerController.update)
  .post('/new',answerController.new)

const questionController = require('../../controllers/question');
const router = require('express').Router();

module.exports = router
  .get('/show',questionController.index)
  .get('/show/:id',questionController.show)
  .get('/populateans/:id',questionController.populateans)
  .post('/new',questionController.new)


const Question= require('mongoose').model('Question');

module.exports = {
  //get all question
  index(request,response){
    Question.find({})
      .then(question => {
        console.log("question in db:",question);
           response.json(question);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  //question by id
  show(request, response) {
    Question.findById(request.params.id)
      .then(function(question) {
        response.json(question);
      })
      .catch(console.log);
  },
  //getting question with naswers and user who answered populated
  populateans(request, response) {
  Question.findById(request.params.id)
    .populate({
    path: 'answers',
    options: { sort: '-like' },
    // Get user of answers - populate the 'user' array for every answer
    populate: { path: 'user' }
  })
    .then(function(question) {
      response.json(question);
    })
    .catch(console.log);
  },
  //add a new question
  new(request, response) {

    console.log(request.body)
    Question.create(request.body)
      .then(question => {
        response.json(question);
      })
      .catch(error => {

        console.log('server errors adding new question', error);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  }
}

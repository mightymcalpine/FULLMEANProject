const Answer= require('mongoose').model('Answer');
const Question=require('mongoose').model('Question');

module.exports = {
  //get all answers
  index(request, response) {
   Answer.find({})
      .then(answer => {
        console.log(answer);
        response.json(answer);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  //showing answers by question
  show(request,response){
    Answer.findById(request.params.id)
      .then(function(answer) {
        response.json(answer);
      })
      .catch(console.log);
  },
  //new answer fora question
  new(request, response) {
    Answer.create(request.body)
      .then(answer => {
        return Question.findById(answer.question)
          .then(question => {
            console.log('Found Question', question);

            if (!question) {
              throw new Error('can not find question');
            }
            // update question with answer
            console.log('Answer to update', answer);
            question.answers.push(answer);
            return question.save()
              .then( response.json(answer));
          });

      })
      .catch(error => {

        console.log('server errors adding new answer', error);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  },
  //update anser for likes
  update(request, response) {
     console.log('in like updated');
    Answer.findByIdAndUpdate(request.params.id, {$inc : { "like" : 1 }}, { new: true })
      .populate('question')
      .then(function(answer) {
        console.log('updated answer', answer);
        response.json(answer);
      })
      .catch(console.log);
  },
}

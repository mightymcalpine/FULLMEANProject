const User= require('mongoose').model('User');

module.exports = {
  index(request,response){
    User.findOne({_id:request.body._id})
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        response.status(401).json('Please check the username');
      });
  },
  //create a new user if doesnt exits,tried upsert with findone and update but didnt work!
 login(request,response){
    User.findOne({username:request.body.username})
      .then(user => {
        console.log("inside then",user);
        if(!user) {
          console.log("inside if",request.body);
          return User.create(request.body)
                  .then((user) => {
                    completeLogin(request,response,user);
                  })
        }
        return completeLogin(request,response,user);
      })
      .catch(error => {
        console.log("error",error)
        response.status(401).json('Please check the username');
        /*
         return User.create(request.body)

          .then(() => {
            completeLogin(request,response,user);
          })*/
      });
  },
  //looging out,added username to cookie since used in someplaces!
  logout(request,response){
    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('userName');
    response.clearCookie('expiration');
    response.json(true);
  },
}

function completeLogin(req,res,user){
  req.session.user = user.toObject();
  res.cookie('userID',user._id.toString());
  res.cookie('userName',user.username.toString());
  res.cookie('expiration', Date.now()+86400*1000);
  res.json(user);

}

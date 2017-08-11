const express=require('express');
const parser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();

//rolling-  update expiration
//cookie - https will be secure true
const sessionConfig = {
  saveUnintialized: true,
  secret: 'SessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
};

app.use(parser.urlencoded({extendend: true}));
app.use(parser.json());

app.use(session(sessionConfig));
app.use(cookieParser('gafsdghfahgfdhafsdsjfj'));

app.use(express.static(path.join(__dirname,'dist')));

require('./server/config/database');

app.use('/api/user',require('./server/config/routes/user.routes'));
app.use('/api/question',require('./server/config/routes/question.routes'));
app.use('/api/answer',require('./server/config/routes/answer.routes'));

const catchAll = require('./server/config/routes/catch-all.routes');
app.use(catchAll);

app.listen(port,()=> console.log(`listening on port ${ port }`))

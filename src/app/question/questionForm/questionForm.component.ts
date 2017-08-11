import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { CookieService } from 'ngx-cookie';

import { UserService } from '../../services/user.service';
import { QuestionService } from '../../services/question.service';

import { Question } from '../../question';
import { User } from '../../user';
import { Answer } from '../../answer';

@Component({
  selector: 'app-questionForm',
  templateUrl: './questionForm.component.html'
})

export class QuestionFormComponent implements OnInit{

  question:Question = new Question();
  userid:string;

  //again intialing in constructor--oops!!!
  constructor(private router: Router,private cookieService: CookieService,private questionServ:QuestionService){
    this.userid=cookieService.get('userID');
  }

  ngOnInit() {
  }

  //new question with user id added
  onSubmit(newlist):void{
    //this.question.answers.length=0;
    var user:User = new User();
    //var answer:Answer = new Answer();
    user._id=this.userid;
    this.question.user=user;
    //this.question.answers.push(answer);
   // console.log('onsubmit of new question',newlist.value);

   console.log('onsubmit of new question',newlist.value);
   console.log('this.question',this.question)


    this.questionServ.newQuestion(this.question)
      .then(() => this.question = new Question())
      .then(() => newlist.reset())
      .then(()=> this.router.navigate(['home']))
      .catch(console.log);
  }
}

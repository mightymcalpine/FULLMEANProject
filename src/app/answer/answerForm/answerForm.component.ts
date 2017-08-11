import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../services/user.service';
import { QuestionService } from '../../services/question.service';
import { AnswerService } from '../../services/answer.service';

import { Subscription } from 'rxjs/Subscription';

import { Question } from '../../question';
import { User } from '../../user';
import { Answer } from '../../answer';

@Component({
  selector: 'app-answerForm',
  templateUrl: './answerForm.component.html'
})

export class AnswerFormComponent implements OnInit{

  answer:Answer = new Answer();
  question:Question = new Question();
  subscription: Subscription;

  userid:string;

  //intialized userid here
  constructor(private aServ:AnswerService,
    private qServ:QuestionService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router){
      this.userid=cookieService.get('userID');
  }

  //get question details for display
  ngOnInit() {
    console.log('on init')
    this.subscription = this.route.paramMap.switchMap(param =>
        this.qServ.getQuestion(param.get('_id'))
      )
      .subscribe(question => this.question = question);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  //submit new answer for the question
  onSubmit(newlist):void{
    var user:User = new User();
    user._id=this.userid;
    this.answer.user=user;
    this.answer.question=this.question;
    this.aServ.newAnswer(this.answer)
      .then(() => this.answer = new Answer())
      .then(() => newlist.reset())
      .then(()=> this.router.navigate(['home']))
      .catch(console.log);
  }
}

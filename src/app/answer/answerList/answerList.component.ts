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
  selector: 'app-answerList',
  templateUrl: './answerList.component.html'
})

export class AnswerListComponent implements OnInit{

  answer:Answer = new Answer();
  question:Question = new Question();
  subscription: Subscription;

  userid:string;

  //intitalize user id in constructor, cannot change from following oops concept!
  constructor(private aServ:AnswerService,
    private qServ:QuestionService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router){
      this.userid=cookieService.get('userID');
  }

  //get all ansers for the question - subscription to reflect on like!
  ngOnInit() {

    console.log('on init')
    this.subscription = this.route.paramMap.switchMap(param =>
        this.qServ.getQuestionwithAnswers(param.get('_id'))
      )
      .subscribe(question => this.question = question);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //increment for likes
  updateLikes(a_id):void{
    this.aServ.updateAnswer(a_id)
      .then((answer)=>{
        console.log("updated");
        return this.qServ.getQuestionwithAnswers(answer.question._id)
              .then(question => this.question = question )
      })
      //.then((answer)=>this.qServ.getQuestionwithAnswers(answer.question._id))
      .catch(console.log);
  }
}

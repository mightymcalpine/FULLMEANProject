import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';

import { CookieService } from 'ngx-cookie';

import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './questionList.component.html',
})

export class QuestionListComponent implements OnInit {

  questions: Array<Question> = [];
  username:string;

  //search filter
  filter: Question = new Question();

  constructor(private qService: QuestionService,private cookieService: CookieService) {
  }

  //intialtize with all question
  ngOnInit() {
    this.username=this.cookieService.get('userName');
    //this.getQuestions();
     console.log('On nginit,getting questions from server');
     this.qService.getQuestions()
      .then(question => {
        console.log('getting questions from server',question);
        this.questions = question;
      })
      .catch(error=>console.log(error));
  }

}



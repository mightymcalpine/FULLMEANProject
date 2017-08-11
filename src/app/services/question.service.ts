import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Question } from '../question';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) {}

  getQuestions(): Promise<Question[]> {
    console.log('questions from server');
    return this._http.get('/api/question/show')
      .map(data => data.json())
      .toPromise();
  }

  getQuestion(id: string): Promise<Question> {
    console.log('getting by id', id);
    return this._http.get(`/api/question/show/${ id }`)
      .map(data => data.json())
      .toPromise();
  }
  getQuestionwithAnswers(id: string): Promise<Question> {
    console.log('getting by id', id);
    return this._http.get(`/api/question/populateans/${ id }`)
      .map(data => data.json())
      .toPromise();
  }
   newQuestion(question: Question): Promise<Question> {
    return this._http.post('/api/question/new', question)
      .map(data => data.json())
      .toPromise();
  }
}

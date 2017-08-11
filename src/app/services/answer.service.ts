import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Answer } from '../answer';

@Injectable()
export class AnswerService {

  constructor(private _http: Http) {}

  /* didnt use
  getAnswers(): Promise<Answer[]> {
    console.log('questions from server');
    return this._http.get('/api/answer/show')
      .map(data => data.json())
      .toPromise();
  }*/

  getAnswer(id: string): Promise<Answer> {
    console.log('getting by id', id);
    return this._http.get(`/api/answer/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

   newAnswer(answer: Answer): Promise<Answer> {
    return this._http.post('/api/answer/new', answer)
      .map(data => data.json())
      .toPromise();
  }
  updateAnswer(id:string):Promise<Answer> {
    console.log('getting by id', id);
    return this._http.put(`/api/answer/update/${ id }`,id)
      .map(data => data.json())
      .toPromise();
  }
}

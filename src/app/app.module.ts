import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QuestionFormComponent } from './question/questionForm/questionForm.component';
import { QuestionListComponent } from './question/questionList/questionList.component';
import { AnswerFormComponent } from './answer/answerForm/answerForm.component';
import { AnswerListComponent } from './answer/answerList/answerList.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { SearchPipe } from './search.pipe';

import { UserService } from './services/user.service';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';

import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    QuestionFormComponent,
    QuestionListComponent,
    AnswerFormComponent,
    AnswerListComponent,
    SearchPipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

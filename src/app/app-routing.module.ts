import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuestionListComponent } from './question/questionList/questionList.component'
import { QuestionFormComponent } from './question/questionForm/questionForm.component'
import { AnswerFormComponent } from './answer/answerForm/answerForm.component';
import { AnswerListComponent } from './answer/answerList/answerList.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: QuestionListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'question',
    component: QuestionFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'question/:_id',
    component: AnswerListComponent,
    canActivate: [AuthGuard]
  },
   {
    path:'answer/:_id',
    component: AnswerFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


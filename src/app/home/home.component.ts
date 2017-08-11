import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'
})

export class HomeComponent{
  registrationErrors: string[] = [];

  user: User = new User();

  constructor(private userserv: UserService,private router: Router){}

  onSubmit(user: User){
    console.log('logging',user);
    this.userserv.login(user)
      .then(()=>this.router.navigate(['home']))
      .catch(response => this.handleErrors(response.json()))
  }


  private handleErrors(errors: (string[] | Error) ){
     console.log("Error:",errors);
      console.log("Error:",Error);
    this.registrationErrors=Array.isArray(errors)?errors:[errors.message];
    console.log("reg",this.registrationErrors);
  }
}

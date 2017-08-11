import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent implements OnInit{

  constructor(private auth: UserService,private router: Router,private cookieService: CookieService){}

  ngOnInit() {

  }

  isAuthed():boolean{
    return this.auth.isAuthed();
  }
  logout(e:Event){
    e.preventDefault();
    //first navigate and then logout for not checking is authed after lgging out
    this.router.navigate(['']);
    this.auth.logout()
      .then(()=>{
        console.log('in logout');
      })
      .catch(() => {})
  }
}

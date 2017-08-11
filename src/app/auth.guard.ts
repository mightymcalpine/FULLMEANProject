import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core'
import { UserService } from './services/user.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate(): boolean {
    const authed = this.user.isAuthed();

    if (!authed) {
      this.router.navigate(['']);
    }

    return authed;
  }
}

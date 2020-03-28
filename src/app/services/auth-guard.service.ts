import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log('notAuthenticated');
      this.router.navigate(['/start-page']);
      return false;
    }
    else {
      console.log('sss');
      return true;
    }

  }



}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate() {
    const currentUser = this.auth.currentTokenValue;

        if (currentUser) {
          return true;
        }
        this.router.navigate(['']);
        return false;

  }

}

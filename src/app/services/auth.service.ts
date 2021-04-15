import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentTokenSubject: BehaviorSubject<any>;
  public currentToken: Observable<any>;

  constructor(public jwtHelper: JwtHelperService,
              private http: HttpClient,
              private router: Router) {
    this.currentTokenSubject = new BehaviorSubject<any>(localStorage.getItem('access_token'));
    this.currentToken = this.currentTokenSubject.asObservable();
   }

  public get currentTokenValue() {
    return this.currentTokenSubject.value;
  }

  public isAuthenticated() {
    const token = localStorage.getItem('access_token');

    return !this.jwtHelper.isTokenExpired(token);
  }

  login(form) {
    return this.http.post(environment.api_url + '/auth', form, {observe: 'response'}).subscribe(data => {
      if (data['status'] === 200) {
        localStorage.setItem("access_token", data['body']['access_token']);
        this.currentTokenSubject.next(data['body']['access_token']);
        this.router.navigate(['/feed'])
      }
    })
  }
}

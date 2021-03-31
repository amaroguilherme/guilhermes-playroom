import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders( environment.api_headers );

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  signUp(form) {
    return this.http.post(environment.api_url + '/register', form, {headers});
  }

  logIn(form) {
    return this.http.post(environment.api_url + '/auth', form, {observe: 'response'});
  }
}

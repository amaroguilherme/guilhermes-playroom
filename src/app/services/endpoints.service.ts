import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders( environment.api_headers );

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  endpointsObservables = [
    this.omelete(),
    this.gamespot()
  ]

  signUp(form) {
    return this.http.post(environment.api_url + '/register', form, {headers});
  }

  feed() {
    return this.http.get(environment.api_url + '/news', {headers});
  }

  omelete() {
    return this.http.get(environment.api_url + '/omelete', {headers});
  }

  gamespot() {
    return this.http.get(environment.api_url + '/gamespot', {headers});
  }

}

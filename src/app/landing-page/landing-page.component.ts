import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isSignUp = false;

  logInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private router: Router,
              private endpoints: EndpointsService,
              private auth: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.isSignUp = true;
  }

  logIn() {
    this.isSignUp = false;
    this.auth.login(this.logInForm.value);
  }

}

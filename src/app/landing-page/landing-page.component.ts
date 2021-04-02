import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
              private endpoints: EndpointsService) { }

  ngOnInit() {
  }

  signUp() {
    this.isSignUp = true;
  }

  logIn() {
    this.isSignUp = false;
    this.endpoints.logIn(this.logInForm.value).subscribe(data => {
      if (data['status'] === 200) {
        this.router.navigate(['/feed'])
      }
    });
  }

}

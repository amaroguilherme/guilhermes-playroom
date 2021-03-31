import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isSignUp = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.isSignUp = true;
  }

  logIn() {
    this.isSignUp = false;
  }

}

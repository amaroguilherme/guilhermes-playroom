import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'feed',
    component: MainPageComponent
  },
  {
    path: 'movies',
    component: MainPageComponent
  },
  {
    path: 'games',
    component: MainPageComponent
  },
  {
    path: 'music',
    component: MainPageComponent
  },
  {
    path: 'guilherme-resume',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

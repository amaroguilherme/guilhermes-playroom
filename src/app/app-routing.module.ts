import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'feed',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'music',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'guilherme-resume',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

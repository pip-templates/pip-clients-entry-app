import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipSigninComponent, PipSignupComponent } from './entry/index';

const appRoutes: Routes = [
  // loadChildren: 'src/app/home/home.module#HomeModule', canLoad: [AuthGuard] // this is for lazy-loading way
  { path: 'signin', component: PipSigninComponent },
  { path: 'signup', component: PipSignupComponent },
  { path: '404', redirectTo: 'signin' },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

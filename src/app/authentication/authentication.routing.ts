import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin', component: SigninComponent,
  }
];

export const AuthenticationRouting: ModuleWithProviders = RouterModule.forChild(routes);


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import {AuthenticationRouting} from './authentication.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    AuthenticationRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }

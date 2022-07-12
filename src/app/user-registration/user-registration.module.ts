import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import {  NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';
import { UserRoutingModule } from './user-registration-routing'
// import { SharedServiceService } from '../shared-service.service';

@NgModule({
  imports: [
    CommonModule,NativeScriptCommonModule,UserRoutingModule,
  ],
  declarations: [LoginComponent,SignupComponent,ForgotPasswordComponent,ChangePasswordComponent],
  providers:[],
  schemas: [NO_ERRORS_SCHEMA]

})
export class UserRegistrationModule { }

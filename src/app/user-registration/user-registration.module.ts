import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {  NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';
import { UserRoutingModule } from './user-registration-routing';

@NgModule({
  imports: [
    CommonModule,NativeScriptCommonModule,UserRoutingModule,
  ],
  declarations: [LoginComponent,SignupComponent,Signup2Component,
    ForgotPasswordComponent,ChangePasswordComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class UserRegistrationModule { }

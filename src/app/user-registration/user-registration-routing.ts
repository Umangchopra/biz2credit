import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { Signup2Component } from "./signup2/signup2.component";

import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes = [
  { path:'',component:LoginComponent },
  { path:'login',component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sign2', component: Signup2Component },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent }
];

export const UserRoutingModule = RouterModule.forChild(routes);

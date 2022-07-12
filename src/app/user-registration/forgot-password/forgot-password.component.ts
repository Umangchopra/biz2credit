import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  textFieldValue:any;
  constructor(private routerEx: RouterExtensions) {

  }

  ngOnInit() {
  }

  onButtonTap() {
		this.routerEx.navigate(['/user']);
	}

	sendNow() {
		this.routerEx.navigate(['/user/change-password']);
	}

	cancel() {
		this.routerEx.back();
	}

}

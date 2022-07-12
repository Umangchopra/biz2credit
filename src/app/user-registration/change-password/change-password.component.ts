import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  textFieldValue:any
  constructor(private routerEx: RouterExtensions) {
  }

  ngOnInit() {
  }

  submit() {
		this.routerEx.navigate(['/user/login'],{ clearHistory: true });
	}

	cancel() {
		this.routerEx.navigate(['/user/login'],{ clearHistory: true });
	}

}

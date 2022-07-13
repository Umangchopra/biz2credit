import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { SharedServiceService } from '~/app/shared-service.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {
  first_name: any;
  last_name: any;
  email: any;
  mobile_number: any;
  dataItems: any;

  constructor(public routerEx: RouterExtensions,public _sharedService: SharedServiceService) {
  }
  ngOnInit() {
  }

  signUp() {
    this._sharedService.callComponentMethod(true);
    this.routerEx.navigate(['/home'], { clearHistory: true });
  }

  cancel() {
    this.routerEx.back();
  }

}

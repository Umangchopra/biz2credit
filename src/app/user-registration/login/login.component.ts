import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextField } from '@nativescript/core';
// import { alert } from '@nativescript/core';
// import { Item } from './item'
import { ItemService } from '../../item.service';
import { SharedServiceService } from '../../shared-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // items: Array<Item>
  textField = "Customer name";
  textField1 = "Customer name";
  textField2 = "Customer name";
  isLoading: boolean = false;
  form: FormGroup;
  emailControlIsValid = true;
  passwordControlIsValid = true;
  @ViewChild('passwordEl', { static: false }) passwordEl: ElementRef<TextField>;
  @ViewChild('emailEl', { static: false }) emailEl: ElementRef<TextField>;
  
  constructor(public itemService: ItemService, public _sharedService: SharedServiceService,private router: RouterExtensions,) { }

  ngOnInit(): void {
    // this.items = this.itemService.getItems()
    this.form = new FormGroup({
      email: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] })
    });
    this.form.get('email').statusChanges.subscribe(status => {
      this.emailControlIsValid = status == 'VALID';
    });
    this.form.get('password').statusChanges.subscribe(status => {
      this.passwordControlIsValid = status == 'VALID';
    });
  }

  // update header data
  callMethod() {
    this._sharedService.callComponentMethod(true);
  };

  onSubmit() {
    this.emailEl.nativeElement.focus();
    this.passwordEl.nativeElement.focus();
    this.passwordEl.nativeElement.dismissSoftInput();
    // if(!this.form.valid){
    //     return;
    // }
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    console.log("email===  ", email, "password===  ", password);
    this.form.reset();
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;
    this.isLoading = true;
    // this.authenticationService.get_systeme(email, password).subscribe(async (res : System[])=>{
    // await this.systemService.createNewSystem(res);
    // pushnotehandler update appsettings => resub to systems
    // this.pushNoteHandler.resubAllTopics();
    if (this.emailControlIsValid) {
      this.callMethod()
      this.router.navigate(['/home'], { clearHistory: true });
    }
    // this.isLoading = false;
    //     },
    //     err =>{
    //         alert(err);
    //         this.isLoading = false;
    // });;
  }
  onDone() {
    this.emailEl.nativeElement.focus();
    this.passwordEl.nativeElement.focus();
    this.passwordEl.nativeElement.dismissSoftInput();
  }

  forgetPassword() {
    this.router.navigate(['/user/forgot-password']);
  }

  registerUser() {
    this.router.navigate(['user/signup']);
  }
}

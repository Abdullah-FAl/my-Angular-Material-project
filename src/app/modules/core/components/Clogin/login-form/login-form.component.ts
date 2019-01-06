import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,  } from '@angular/forms';





@Component({
  selector: 'tset-angular-material-sw-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() FormValue: EventEmitter<any> = new EventEmitter();

  _LoginForm: FormGroup;
  hide: boolean = true ;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.newForm();
  }



newForm() {

  this._LoginForm = this.fb.group({
username: new FormControl('',
[

  Validators.required,
  Validators.min(4)
]),
password: new FormControl('',
[
  Validators.required

])

  });


}






getUserNameErrorMessage() {
  return this._LoginForm.get('username').hasError('required') ? 'يلزم إدخل بيانات في هذا الحقل' :

  this._LoginForm.get('username').hasError('email') ? 'ليس اسم مستخدم صالح' : '';
}
getPasswordErrorMessage() {
  return this._LoginForm.get('password').hasError('required') ? 'يلزم إدخل بيانات في هذا الحقل' : '';
}



onSubmit() {

  if(this._LoginForm.valid){

  const Value: LoginForm  = this._LoginForm.value;
   this.FormValue.emit(Value);

  }

}



}


interface LoginForm {
  username: string;
  password: string;
}


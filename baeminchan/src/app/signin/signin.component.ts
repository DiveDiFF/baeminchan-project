import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { PasswordValidator } from './password-validator.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm: FormGroup;
  errMsgNormal = true;
  errMsgFail = false;

  ngOnInit() {
    this.userForm = new FormGroup({
      // formControls: new FormGroup({})
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      ]),
      password: new FormControl('', Validators.required),
      // passwordGroup: new FormGroup({
      //   password: new FormControl('', Validators.required),
      //   confirmPassword: new FormControl('', Validators.required)
      // }, PasswordValidator.match),
    });
    console.log(this.userForm);
  }
  get userid() {
    return this.userForm.get('userid');
}
//   get passwordGroup() {
//     return this.userForm.get('passwordGroup');
// }
  get password() {
    return this.userForm.get('password');
}
//   get confirmPassword() {
//     return this.userForm.get('passwordGroup.confirmPassword');
// }
//   get hobbies(): FormArray {
//     return this.userForm.get('hobbies') as FormArray;
// }
  onSubmit() {
    console.log(this.userForm);
    this.userForm.reset();
}
  validate() {
    this.userForm.status === 'INVALID' ? alert('아이디를 입력하세요') : null ;
    this.errMsgNormal = !this.errMsgNormal;
    this.errMsgFail = !this.errMsgFail;
  }
}

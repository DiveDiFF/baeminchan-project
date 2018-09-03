import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { PasswordValidator } from './password-validator.component';
import { ProductApiService } from '../../module/product-api.service';

import { HttpClient, HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm: FormGroup;
  errMsgNormal = true;
  errMsgFail = false;
  apiUrl = `https://server.yeojin.me/api/users/auth-token/`;

  constructor(private http: HttpClient, public api: ProductApiService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      // formControls: new FormGroup({})
      username: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      ]),
      password: new FormControl('', Validators.required),
      // passwordGroup: new FormGroup({
      //   password: new FormControl('', Validators.required),
      //   confirmPassword: new FormControl('', Validators.required)
      // }, PasswordValidator.match),
    });
    // console.log(this.userForm);
  }

  get username() {
    return this.userForm.get('username');
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
    this.userForm.status === 'INVALID' ? alert('아이디를 입력하세요') : '' ;
    this.errMsgNormal = !this.errMsgNormal;  // 수정필요
    this.errMsgFail = !this.errMsgFail;  // 수정필요
    this.http.post<any>(this.apiUrl, this.userForm.value)
    .subscribe( resp => {
      localStorage.setItem('Token', resp.token)
      const tokenSend = localStorage.getItem('Token');
    this.api.userToken = tokenSend;
    console.log(this.api.userToken);
    });
  }
}

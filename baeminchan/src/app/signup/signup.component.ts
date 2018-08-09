import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '../../../node_modules/@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
        userEmailId: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*/i)]),
        emailDomain: new FormControl('', [Validators.required, Validators.pattern(/[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      // }, PasswordValidator.match),
    }),
    userName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
  });
    console.log(this.userForm);
  }

  get userid() {
    return this.userForm.get('userid');
  }

  onSubmit() {
    console.log(this.userForm);
    this.userForm.reset();
  }

}

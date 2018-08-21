import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;
  userDetails: {
    username: string;
    password: string;
    email: string;
    fullname: string;
    contact_phone: string;
    birthday: string;
  };
  emails = [ '직접입력', 'naver.com', 'gmail.com', 'hanmail.net', 'daum.net', 'nate.com', 'hotmail.com', 'yahoo.co.kr', 'paran.com', 'empal.com', 'chollian.net', 'hanafos.com', 'dreamwiz.com', 'kornet.net', 'korea.com', 'lycos.co.kr', 'orgio.net', 'passmail.to' ];
  yearsSignup = [];
  monthsSignup = [];
  daysSignup = [];
  // selectShow = false;
  selectHidden: string;
  isFocused: boolean;
  selectedDomain: string;
  selectedYear: string;
  selectedMonth: string;
  selectedDay: string;
  visibleBirth: boolean;
  visibleMonth: boolean;
  visibleDays: boolean;
  visibleEmail: boolean;

  visiblePhoneAuth = false;
  confirmAuthNum = false;
  sentAuthNum = false;
  cancelAuthNum = false;

  // apiUrl = `https://server.yeojin.me/api/users`;

  constructor(private fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {
    this.userForm = new FormGroup({
        userEmailId: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*/i)]),
        emailDomain: new FormControl('', [Validators.required, Validators.pattern(/[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      // }, PasswordValidator.match),
    }),
    fullname: new FormControl('', Validators.required),
    phoneNumberGroup: new FormGroup({
      phNum1: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
      phNum2: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
      phNum3: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)])
    }),
    birthDay1: new FormControl('', Validators.required),
    birthDay2: new FormControl('', Validators.required),
    birthDay3: new FormControl('', Validators.required)
    });
    this.years();
    this.months();
    this.days();
    }

  years() {
    for (let i = 1930; i < 2010 ; i++) {
      this.yearsSignup.push(i);
    }
  }
  months() {
    for (let i = 1; i <= 12 ; i++) {
      this.monthsSignup.push(i);
    }
  }
  days() {
    for (let i = 1; i <= 31 ; i++) {
      this.daysSignup.push(i);
    }
  }

  // get emailDomain () {
  //   return this.userForm.get('emailDomain');
  // }

  showHiddenDomain() {
    this.visibleEmail = true;
  }
  hideSelect() {
    this.visibleEmail = false;
  }
  currenEmail(i) {
    this.selectedDomain = this.emails[i];
    this.userForm.value.emailDomain = this.selectedDomain;
  }
  doInput(elem) {
    elem.value = this.selectedDomain;
    this.hideSelect();
  }
  currentYear(i) {
    this.selectedYear = this.yearsSignup[i];
    this.userForm.value.birthDay1 = this.selectedYear;
  }
  setYear(elem) {
    elem.innerHTML = this.selectedYear;
    this.clearYear();
  }
  currentMonth(i) {
    this.selectedMonth = this.monthsSignup[i];
    this.userForm.value.birthDay2 = this.selectedMonth;
  }
  setMonth(elem) {
    elem.innerHTML = this.selectedMonth;
    this.clearMonth();
  }
  currentDay(i) {
    this.selectedDay = this.daysSignup[i];
    this.userForm.value.birthDay3 = this.selectedDay;

  }
  setDay(elem) {
    elem.innerHTML = this.selectedDay;
    this.clearDays();
  }
  showHiddenYear() {
    this.visibleBirth = true;
  }
  showHiddenMonth() {
    this.visibleMonth = true;
  }
  showHiddenDays() {
    this.visibleDays = true;
  }
  clearDomain() {
    this.visibleEmail = false;
  }
  clearYear() {
    this.visibleBirth = false;
  }
  clearMonth() {
    this.visibleMonth = false;
  }
  clearDays() {
    this.visibleDays = false;
  }
  inputAuthNum() {
    this.sentAuthNum = !this.sentAuthNum;
    this.cancelAuthNum = !this.cancelAuthNum;
    const phoneNum = { contact_phone: `${this.userForm.value.phoneNumberGroup.phNum1}-${this.userForm.value.phoneNumberGroup.phNum2}-${this.userForm.value.phoneNumberGroup.phNum3}` };
    // console.log(phoneNum);
    this.http.post(`https://server.yeojin.me/api/users/phone/`, phoneNum).subscribe((resp) => console.log(resp));
  }
  onSubmit() {
    // console.log(this.userForm);
    this.userForm.reset();
  }
  submitUserDetail() {
    this.userDetails = {
      // username: `${this.userForm.value.userEmailId}@${this.userForm.value.emailDomain}`,
      // password: this.userForm.value.passwordGroup.password,
      // email: `${this.userForm.value.userEmailId}@${this.userForm.value.emailDomain}`,
      // fullname: this.userForm.value.fullname,
      // contact_phone: `${this.userForm.value.phoneNumberGroup.phNum1}-${this.userForm.value.phoneNumberGroup.phNum2}{this.userForm.value.phoneNumberGroup.phNum3}`,
      // birthday: `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay}`
          username: 'amlee',
          password: '101304am',
          email: 'amlee@amlee.com',
          fullname: 'leeyeonam',
          contact_phone: '010-1111-2222',
          birthday: '2000-01-01'
      };
    this.http.post(`https://server.yeojin.me/api/users/create/`, this.userDetails).subscribe((resp) => console.log(resp));

  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.scss']
})
export class MerchantLoginComponent implements OnInit {
  signupForm2: FormGroup;
  logo = 'http://localhost:4200/assets/img/pickbids logo.png';
  // logo = '../../../assets/images/pub/pickbids_logo_2_2x.png';
  [x: string]: any;
  location = 'Banglore';
  show: Boolean;
  showMore1: Boolean;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  mainheader = true;
  header = false;
  login1 = true;
  show1() {
    this.showModal = true; // Show-Hide Modal Check
  }
  signout() {
    this.mainheader = true;
    this.header = false;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
      ]]
    });
    this.signupForm2 = this.fb.group({

      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],

    }, { validator: this.passwordMatchValidator })
  }
  passwordMatchValidator(f: FormGroup) {
    return f.controls['Password'].value ===
      f.controls['ConfirmPassword'].value ? null : { 'mismatch': true };
  }
  get g() {
    return this.signupForm2.controls;
  }
  submit() {
    console.log(this.signupForm2.get('Password').value);
    var password1 = this.signupForm2.get('Password').value;
    var password2 = this.signupForm2.get('ConfirmPassword').value;
    // If password not entered
    if (password1 == '')
      alert("Please enter Password");
    else if (password2 == '')
      alert("Please enter confirm password");
    else if (password1 != password2) {
      alert("\nPassword did not match: Please try again...")
      return false;
    }
    else {
      console.log(this.signupForm2.value);
      console.log("submitted");
      alert("Your Password has been Successfully changed");
      this.editForm = false;
      return this.login1 = true;
    }
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  login(f) {
    this.mainheader = false;
    this.header = true;
    this.showModal = false;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }
    console.log(this.loginForm.value);
  }
  loginForm: FormGroup;
  forgotForm: FormGroup;
  forgetpassword = false;
  gotp = false;
  message = false;
  mainlogin = true;
  hide1 = true;
  hide2 = true;
  hide3 = true;
  hide4 = true;
  editForm = false;
  error_messages = {
    'username': [
      { type: 'required', message: 'User Name is required.' },
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Invalid is required.' },
      { type: 'pattern', message: 'please enter a valid email address.' }
    ],
    'tel': [
      { type: 'required', message: 'Phone Number is required.' },
      { type: 'pattern', message: 'please enter a valid 10 digits number.' },
      { type: 'pattern', message: 'Invalid Characters only Numbers' },
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must contain atleast 6 characters' },
      { type: 'maxlength', message: 'password must contain A-Z, a-z, 0-9 and less than 15 characters' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must contain atleast 6 characters' },
      { type: 'maxlength', message: 'password must contain A-Z, a-z, 0-9 and less than 15 characters' }
    ],
  }
  error_message = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'please enter a valid email address.' }
    ],
  }
  Submit() {
    var tel = this.registerForm.value.tel;
    this.router.navigate(['/adminlayout']);
    console.log(this.loginForm.value);
    this.mainheader = false;
    this.header = true;
    this.showModal = false;
  }
  forgetSubmit() {
    this.gotp = true;
    this.forgetpassword = false;
  }
  forgotpage() {
    this.mainlogin = false;
    this.forgetpassword = true;
    this.login1 = false;

  }
  myFunction() {
    this.editForm = true;
    this.gotp = false;
  }
  clicklogin() {
    this.router.navigate(['/dashboard']);
  }
  constructor(private fb: FormBuilder, public http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.fb.group
      (
        {
          username: new FormControl('', Validators.compose([
            Validators.required
          ])),
          email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
          ])),
          tel: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern("[0-9]{10}")
          ])),
          password: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
          ])),
          confirmpassword: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
          ])),
        },
        {
          validators: this.password.bind(this)
        }
      );
    this.forgotForm = this.fb.group
      (
        {
          email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ])),
        }
      )
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '35px',
      'height': '50px'
    }
  };
  onOtpChange(otp) {
    this.otp = otp;
  }
  setVal(val) {
    this.ngOtpInput.setValue(val);
  }
  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
}

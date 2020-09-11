import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.scss']
})
export class MerchantProfileComponent implements OnInit {
  [x: string]: any;
  show = true;
  show4 = false;
  passwordForm: FormGroup;
  submitted = false;
  loginForm: FormGroup;
  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Invalid is required.' },
      { type: 'pattern', message: 'please enter a valid email address.' }
    ],

    'tel': [
      { type: 'required', message: 'Phone Number is required.' },
      { type: 'pattern', message: 'Invalid Characters only Numbers' },
      { type: 'pattern', message: 'please enter a valid 10 digits number.' }
    ],
  }
  error_message = {
    'oldpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must contain atleast 6 characters' },
      { type: 'maxlength', message: 'password must contain A-Z, a-z, 0-9 and less than 15 characters' }
    ],
    'newpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must contain atleast 6 characters' },
      { type: 'maxlength', message: 'password must contain A-Z, a-z, 0-9 and less than 15 characters' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required and password should be same as new Password' },
      { type: 'minlength', message: 'password must contain atleast 6 characters' },
      { type: 'maxlength', message: 'password must contain A-Z, a-z, 0-9 and less than 15 characters' }
    ],
  }
  Submit() {
    var tel = this.registerForm.value.tel;
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.informdata = true;
    this.editForm = false;
  }
  constructor(public _d: DomSanitizer, private fb: FormBuilder, public http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.snapshot.paramMap.get('tel');
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])),
      tel: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])),

    }),
      this.form = this.fb.group({
        fullmane: ['', [Validators.required]],
        live: ['', [Validators.required]],
      })
    this.passwordForm = this.fb.group({
      oldpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ])),
      newpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ])),
    },
      {
        validators: this.password.bind(this)
      }
    );
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('newpassword');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  get f() { return this.registerForm.controls; }
  get f1() { return this.passwordForm.controls; }
  onPassword() {
    console.log(this.passwordForm.value);
    this.informdata = true;
    this.editForm = false;
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.informdata = true;
    this.editForm = false;
  }
  informdata = false;
  informform = true;
  editForm = false;
  fullmane: string;
  live: string;
  userDetails: Array<object>;
  form: FormGroup;
  ngOnInit() {
    this.tel = this.route.snapshot.paramMap.get('tel');
    this.passwordForm = this.fb.group({
      oldpassword: ['', [Validators.required, Validators.minLength(6)]],
      newpassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
      {
      });
    this.registerForm = this.fb.group({
      phone: ['', [Validators.required]],
      email: ['', Validators.required],
    }),
      this.userDetails = [];
    this.form = new FormGroup({
      fullmane: new FormControl("", Validators.required),
      live: new FormControl("", Validators.required),
    });
  }
  show1() {
    this.editForm = true;
    this.informdata = false;
    this.informform = false;
  }
  informSubmit(form) {
    let index = form.getRawValue().index
    if (index != null) {
      this.userDetails[index] = form.value
    } else {
      this.userDetails.push(form.value)
    }
    console.log(this.form.value);
    this.form.reset() // reset form to empty
    this.informdata = true;
    this.informform = false;
  }
  imgsrc = '../../../assets/img/profile.jpg';
  hide = true;
  hide1 = true;
  hide2 = true;
  fileChange(e) {
    const file = e.srcElement.files[0];
    this.imgsrc = window.URL.createObjectURL(file);
  }
  name="Robert Chahan";
  place="Bangalore";
}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-merchant-edit-profile',
  templateUrl: './merchant-edit-profile.component.html',
  styleUrls: ['./merchant-edit-profile.component.scss']
})
export class MerchantEditProfileComponent implements OnInit {
  [x: string]: any;
  show = true;
  show4 = false;
  passwordForm: FormGroup;
  submitted = false;
  loginForm: FormGroup;
  error_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Email is required.' },
      { type: 'pattern', message: 'please enter a valid email address.' }
    ],
    tel: [
      { type: 'required', message: 'Phone Number is required.' },
      // { type: 'pattern', message: 'Invalid Characters only Numbers' },
      { type: 'pattern', message: 'please enter a valid 10 digits number.' }
    ],
  }
  Submit() {
    var tel = this.registerForm.value.tel;
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.informdata = true;
    this.editForm = false;
    window.alert("Your Information Has Been Successfully Saved");
    this.router.navigate(['/landingpage',]);
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
      this.passwordForm = this.fb.group({
      },
      );
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
    this.registerForm = this.fb.group({
      phone: ['', [Validators.required]],
      email: ['', Validators.required],
    }),
      this.userDetails = [];
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
}



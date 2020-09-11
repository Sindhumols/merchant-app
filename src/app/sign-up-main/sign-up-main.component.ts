import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sign-up-main',
  templateUrl: './sign-up-main.component.html',
  styleUrls: ['./sign-up-main.component.scss']
})
export class SignUpMainComponent implements OnInit {
  signupForm2: FormGroup;
  [x: string]: any;
  constructor(private fb: FormBuilder, private router: Router) {
  }
  hide3 = true;
  hide4 = true;
  ngOnInit() {
    this.signupForm2 = this.fb.group({
      name: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      check: [false, [Validators.requiredTrue]],
    }, { validator: this.passwordMatchValidator })
  }
  passwordMatchValidator(f: FormGroup) {
    return f.controls['Password'].value ===
      f.controls['ConfirmPassword'].value ? null : { 'mismatch': true };
  }
  get f() {
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
      this.router.navigate(['/subscription',]);
      return true;
    }
  }
}
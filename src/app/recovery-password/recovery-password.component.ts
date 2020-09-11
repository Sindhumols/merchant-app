import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { MustMatch } from '../_helpers/must-match.validator';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
  signupForm2: FormGroup;
  [x: string]: any;
  constructor(private fb: FormBuilder, private router: Router) {
  }
  hide=true;
  hide3 = true;
  hide4 = true;
  ngOnInit() {
    this.signupForm2 = this.fb.group({
      oldpassword: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
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
      window.alert("Your Password Has Been Successfully Changed")
      this.router.navigate(['/profile',]);
      return true;
    }
  }
}
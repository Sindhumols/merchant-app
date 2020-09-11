import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-merchant-signup',
  templateUrl: './merchant-signup.component.html',
  styleUrls: ['./merchant-signup.component.scss']
})
export class MerchantSignupComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
    this.lastname = this.route.snapshot.paramMap.get('lastname');
    this.email = this.route.snapshot.paramMap.get('email');
    this.contact = this.route.snapshot.paramMap.get('contact');
    this.StoreCatagory = this.route.snapshot.paramMap.get('StoreCatagory');
    this.StoreName = this.route.snapshot.paramMap.get('StoreName');
    this.gstno = this.route.snapshot.paramMap.get('gstno');
    this.check = this.route.snapshot.paramMap.get('check');
    console.log(this.name + this.lastname + this.email + this.contact + this.StoreCatagory + this.StoreName + this.check);
  }
  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      StoreCatagory: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(4)]],
      StoreName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(4)]],
      GSTNO: ['', [Validators.required, Validators.pattern("^\\d{2}[a-zA-Z]{5}\\d{4}[a-zA-Z]{1}\\d{1}[zZ]{1}[\\da-zA-Z]{1}$")]],
      check: [false, [Validators.requiredTrue]],
    });
    this.edit();
  }
  edit() {
    console.log(this.name);
    if (this.name != null) {
      console.log("going to push value")
      this.signupForm.setValue({
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        contact: this.contact,
        StoreCatagory: this.StoreCatagory,
        StoreName: this.StoreName,
        GSTNO: this.gstno,
        check: this.check,
      });
    }
  }
  get f() {
    return this.signupForm.controls;
  }
  submit() {
    console.log(this.signupForm.value);
    console.log("submitted");
    var name = this.signupForm.value.name;
    var lastname = this.signupForm.value.lastname;
    var email = this.signupForm.value.email;
    var contact = this.signupForm.value.contact;
    var StoreCatagory = this.signupForm.value.StoreCatagory;
    var StoreName = this.signupForm.value.StoreName;
    var gstno = this.signupForm.value.GSTNO;
    var check = this.signupForm.value.check;
    this.router.navigate(['/merchants/signup1', {
      name: name, lastname: lastname, email: email,
      contact: contact, StoreCatagory: StoreCatagory, StoreName: StoreName, check: check, gstno: gstno
    }]);
  }
  next(user, i) {
    this.clicked = !this.clicked;
  }
  signupForm: FormGroup;
  [x: string]: any;
  name: any;
  lastname: any;
  email: any;
  contact: any;
  StoreCatagory: any;
  StoreName: any;
  check: any;
  gstno: any;
}
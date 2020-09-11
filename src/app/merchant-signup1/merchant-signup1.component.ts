import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-signup1',
  templateUrl: './merchant-signup1.component.html',
  styleUrls: ['./merchant-signup1.component.scss']
})
export class MerchantSignup1Component implements OnInit {
  signupForm1: FormGroup;
  [x: string]: any;
  name: any;
  lastname: any;
  email: any;
  contact: any;
  StoreCatagory: any;
  StoreName: any;
  check: any;
  gstno: any;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
    this.lastname = this.route.snapshot.paramMap.get('lastname');
    this.email = this.route.snapshot.paramMap.get('email');
    this.contact = this.route.snapshot.paramMap.get('contact');
    this.StoreCatagory = this.route.snapshot.paramMap.get('StoreCatagory');
    this.StoreName = this.route.snapshot.paramMap.get('StoreName');
    this.check = this.route.snapshot.paramMap.get('check');
    this.gstno = this.route.snapshot.paramMap.get('gstno');
    console.log(this.name + this.lastname + this.email + this.contact + this.StoreCatagory + this.StoreName + this.check);
  }
  ngOnInit() {
    this.signupForm1 = this.fb.group({
      storenumber: ['', [Validators.required, Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
      BuildingName: ['', [Validators.required]],
      Address1: ['', [Validators.required]],
      Address2: ['', [Validators.required]],
      Landmark: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]],
      Zipcode: ['', [Validators.required, Validators.pattern('[0-9]{6}'), Validators.minLength(6)]],
      check1: [false, [Validators.requiredTrue]],
    })
  }
  get f() {
    return this.signupForm1.controls;
  }
  back() {
    this.router.navigate(['/merchants/signup', {
      name: this.name, lastname: this.lastname,
      email: this.email, contact: this.contact, StoreCatagory: this.StoreCatagory, StoreName: this.StoreName,
      check: this.check, gstno: this.gstno
    }]);
  }
  next1() {
    console.log(this.signupForm1.value);
    console.log("submitted");
    this.router.navigate(['/merchants/signupmain']);
  }
}
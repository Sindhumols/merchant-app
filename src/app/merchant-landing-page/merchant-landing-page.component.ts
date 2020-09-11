import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-merchant-landing-page',
  templateUrl: './merchant-landing-page.component.html',
  styleUrls: ['./merchant-landing-page.component.scss']
})
export class MerchantLandingPageComponent implements OnInit {
  show = true;
  show1 = false;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }
  get f() {
    return this.contactForm.controls;
  }
  submit() {
    console.log(this.contactForm.value);
  }
  submit1() {
    this.contactForm.reset();
    this.show = false;
    this.show1 = true;
  }
  logo = 'http://localhost:4200/assets/img/pickbids logo.png';

}
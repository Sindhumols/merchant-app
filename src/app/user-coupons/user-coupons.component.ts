import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-coupons',
  templateUrl: './user-coupons.component.html',
  styleUrls: ['./user-coupons.component.scss']
})
export class UserCouponsComponent implements OnInit {
coupons ='../../assets/img/coupons.png';
  constructor() { }

  ngOnInit() {
  }

}

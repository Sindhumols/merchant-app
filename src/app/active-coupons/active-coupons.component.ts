import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-active-coupons',
  templateUrl: './active-coupons.component.html',
  styleUrls: ['./active-coupons.component.scss']
})
export class ActiveCouponsComponent implements OnInit {
coupons = '../../assets/img/coupons.png';
  constructor() { }
  ngOnInit() {
  }

}

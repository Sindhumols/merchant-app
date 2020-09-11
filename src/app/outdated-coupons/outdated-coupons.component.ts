import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outdated-coupons',
  templateUrl: './outdated-coupons.component.html',
  styleUrls: ['./outdated-coupons.component.scss']
})
export class OutdatedCouponsComponent implements OnInit {
  coupons ='../../assets/img/coupons.png';
  constructor() { }

  ngOnInit() {
  }

}

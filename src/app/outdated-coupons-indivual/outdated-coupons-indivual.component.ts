import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outdated-coupons-indivual',
  templateUrl: './outdated-coupons-indivual.component.html',
  styleUrls: ['./outdated-coupons-indivual.component.scss']
})
export class OutdatedCouponsIndivualComponent implements OnInit {
  coupons ='../../assets/img/coupons.png';
  date: "11 March";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-active-coupons-indivual',
  templateUrl: './active-coupons-indivual.component.html',
  styleUrls: ['./active-coupons-indivual.component.scss']
})
export class ActiveCouponsIndivualComponent implements OnInit {
  coupons ='../../assets/img/coupons.png';
  date: "11 March";
  constructor() { }
  ngOnInit() {
  }

}

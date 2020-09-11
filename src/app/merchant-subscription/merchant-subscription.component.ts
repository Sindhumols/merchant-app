import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-subscription',
  templateUrl: './merchant-subscription.component.html',
  styleUrls: ['./merchant-subscription.component.scss']
})
export class MerchantSubscriptionComponent implements OnInit {
  logo = './assets/images/logo.png';
  [x: string]: any;
  constructor() { }
  show: Boolean;
  showMore1: Boolean;
  ngOnInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
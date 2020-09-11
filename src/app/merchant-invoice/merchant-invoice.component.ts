import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-invoice',
  templateUrl: './merchant-invoice.component.html',
  styleUrls: ['./merchant-invoice.component.scss']
})
export class MerchantInvoiceComponent implements OnInit {
[x: string]: any;
coupons ='../../assets/img/coupons.png';
date: "11 March";
onPrint() {
window.print();
}
constructor() { }
ngOnInit() {
}
}
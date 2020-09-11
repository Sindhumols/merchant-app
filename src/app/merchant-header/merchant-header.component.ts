import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-merchant-header',
  templateUrl: './merchant-header.component.html',
  styleUrls: ['./merchant-header.component.scss']
})
export class MerchantHeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  logo = 'http://localhost:4200/assets/img/pickbids logo.png';
 
}

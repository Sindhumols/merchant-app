import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-category',
  templateUrl: './merchant-category.component.html',
  styleUrls: ['./merchant-category.component.scss']
})
export class MerchantCategoryComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  logo = 'http://localhost:4200/assets/img/pickbids logo.png';
}

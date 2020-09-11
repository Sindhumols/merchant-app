import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  show = true;
  show1 = false;
  send() {
    this.show = false;
    this.show1 = true;
  }
  send1(){
    this.show1 = false;
    this.show = true;
  }
}
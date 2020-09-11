import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  [x:string]:any;
  show=true;
  hotels ='../../assets/img/images__3_.png';
  date: "11 March";
  outof = 90/120;
  outof1 = 30/50;
  face="../../assets/img/face.png"
  hotelname="arrive bientot";
 time= "(Open @ 12 Pm)";

}

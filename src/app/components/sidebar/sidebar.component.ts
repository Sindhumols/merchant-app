import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    // icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', class: '' },
    { path: '/user-coupons', title: 'Coupons', class: '' },
    { path: '/media', title: 'Media',   class: '' },
    { path: '/history', title: 'History',   class: '' },
    { path: '/subscription-plan', title: 'Subscription Details', class: '' },
    { path: '/faq', title: 'Faqs',  class: '' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Merchantrname = "Smith";
  menuItems: any[];
  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

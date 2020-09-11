import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { GenerateOtpComponent } from './generate-otp/generate-otp.component';
import { MerchantEditProfileComponent } from './merchant-edit-profile/merchant-edit-profile.component';
import { MerchantSubscriptionComponent } from './merchant-subscription/merchant-subscription.component';
import { MerchantPaidComponent } from './merchant-paid/merchant-paid.component';
import { MerchantPaymentComponent } from './merchant-payment/merchant-payment.component';
import { MerchantCategoryComponent } from './merchant-category/merchant-category.component';
import { HeaderProfileNotificationComponent } from './header-profile-notification/header-profile-notification.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { MerchantLandingPageComponent } from './merchant-landing-page/merchant-landing-page.component';
import { MerchantFooterComponent } from './merchant-footer/merchant-footer.component';
import { MerchantHeaderComponent } from './merchant-header/merchant-header.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';
import { MerchantSignup1Component } from './merchant-signup1/merchant-signup1.component';
import { MerchantSignupComponent } from './merchant-signup/merchant-signup.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { UserCouponsComponent } from './user-coupons/user-coupons.component';
import { MediaComponent } from './media/media.component';
import { HistoryComponent } from './history/history.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { FaqComponent } from './faq/faq.component';
import { ActiveCouponsComponent } from './active-coupons/active-coupons.component';
import { OutdatedCouponsComponent } from './outdated-coupons/outdated-coupons.component';
import { ActiveCouponsIndivualComponent } from './active-coupons-indivual/active-coupons-indivual.component';
import { OutdatedCouponsIndivualComponent } from './outdated-coupons-indivual/outdated-coupons-indivual.component';
import { MerchantInvoiceComponent } from './merchant-invoice/merchant-invoice.component';

const routes: Routes = [
  {
    path: 'landingpage', component: MerchantLandingPageComponent
  },
  {
    path: 'merchants/signup', component: MerchantSignupComponent
  },
  {
    path: 'merchants/signup1', component: MerchantSignup1Component
  },
  {
    path: 'merchants/signupmain', component: SignUpMainComponent
  },
  { path: 'header', component: MerchantHeaderComponent },
  { path: 'footer', component: MerchantFooterComponent },
  { path: 'login', component: MerchantLoginComponent },
  { path: 'category', component: MerchantCategoryComponent },
  { path: 'payment', component: MerchantPaymentComponent },
  { path: 'paid', component: MerchantPaidComponent },
  { path: 'profile/notification', component: HeaderProfileNotificationComponent },
  { path: 'subscription', component: MerchantSubscriptionComponent },
  { path: 'profile', component: MerchantProfileComponent },
  { path: 'editprofile', component: MerchantEditProfileComponent },
  { path: 'recoverypassword', component: RecoveryPasswordComponent },
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: MerchantDashboardComponent },
      { path: 'user-coupons', component: UserCouponsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'media', component: MediaComponent },
      { path: 'subscription-plan', component: SubscriptionDetailsComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'active-coupons', component: ActiveCouponsComponent },
      { path: 'outdated-coupons', component: OutdatedCouponsComponent },
      { path: 'active', component: ActiveCouponsIndivualComponent },
      { path: 'outdated', component: OutdatedCouponsIndivualComponent },
      { path: 'invoice', component: MerchantInvoiceComponent },
      { path: 'generateotp', component: GenerateOtpComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'landingpage'
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

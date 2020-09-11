import { MerchantEditProfileComponent } from './merchant-edit-profile/merchant-edit-profile.component';
import { MerchantInvoiceComponent } from './merchant-invoice/merchant-invoice.component';
import { OutdatedCouponsIndivualComponent } from './outdated-coupons-indivual/outdated-coupons-indivual.component';
import { ActiveCouponsIndivualComponent } from './active-coupons-indivual/active-coupons-indivual.component';
import { OutdatedCouponsComponent } from './outdated-coupons/outdated-coupons.component';
import { ActiveCouponsComponent } from './active-coupons/active-coupons.component';
import { FaqComponent } from './faq/faq.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { MediaComponent } from './media/media.component';
import { HistoryComponent } from './history/history.component';
import { UserCouponsComponent } from './user-coupons/user-coupons.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MerchantPaymentComponent } from './merchant-payment/merchant-payment.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { MerchantPaidComponent } from './merchant-paid/merchant-paid.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { MerchantLandingPageComponent } from './merchant-landing-page/merchant-landing-page.component';
import { NgxImageDisplayModule } from '@creativeacer/ngx-image-display';
import { MerchantSignupComponent } from './merchant-signup/merchant-signup.component';
import { MerchantSignup1Component } from './merchant-signup1/merchant-signup1.component';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';
import { MerchantSubscriptionComponent } from './merchant-subscription/merchant-subscription.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MerchantHeaderComponent } from './merchant-header/merchant-header.component';
import { MerchantFooterComponent } from './merchant-footer/merchant-footer.component';
import { MerchantCategoryComponent } from './merchant-category/merchant-category.component';
import { HeaderProfileNotificationComponent } from './header-profile-notification/header-profile-notification.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { ChartModule } from 'angular2-chartjs';
import { NgOtpInputModule } from 'ng-otp-input';
import { GenerateOtpComponent } from './generate-otp/generate-otp.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    ChartModule,
    NgOtpInputModule,
    NgxImageDisplayModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MerchantLandingPageComponent,
    AdminHeaderComponent,
    MerchantSignupComponent,
    MerchantSignup1Component,
    SignUpMainComponent,
    MerchantSubscriptionComponent,
    MerchantProfileComponent,
    MerchantPaidComponent,
    HeaderProfileNotificationComponent,
    MerchantHeaderComponent,
    MerchantFooterComponent,
    MerchantLoginComponent,
    MerchantCategoryComponent,
    MerchantPaymentComponent,
    SidebarComponent,
    AdminLayoutComponent,
    MerchantDashboardComponent,
    UserCouponsComponent,
    HistoryComponent,
    MediaComponent,
    SubscriptionDetailsComponent,
    FaqComponent,
    ActiveCouponsComponent,
    OutdatedCouponsComponent,
    ActiveCouponsComponent,
    ActiveCouponsIndivualComponent,
    OutdatedCouponsComponent,
    OutdatedCouponsIndivualComponent,
    MerchantInvoiceComponent,
    MerchantEditProfileComponent,
    GenerateOtpComponent,
    RecoveryPasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

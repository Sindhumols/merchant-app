import { GenerateOtpComponent } from './../../generate-otp/generate-otp.component';
import { MerchantInvoiceComponent } from './../../merchant-invoice/merchant-invoice.component';
import { OutdatedCouponsIndivualComponent } from './../../outdated-coupons-indivual/outdated-coupons-indivual.component';
import { ActiveCouponsIndivualComponent } from './../../active-coupons-indivual/active-coupons-indivual.component';
import { OutdatedCouponsComponent } from './../../outdated-coupons/outdated-coupons.component';
import { ActiveCouponsComponent } from './../../active-coupons/active-coupons.component';
import { SubscriptionDetailsComponent } from './../../subscription-details/subscription-details.component';
import { MerchantDashboardComponent } from '../../merchant-dashboard/merchant-dashboard.component';
import { FaqComponent } from './../../faq/faq.component';
import { MediaComponent } from './../../media/media.component';
import { HistoryComponent } from './../../history/history.component';
import { UserCouponsComponent } from './../../user-coupons/user-coupons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  { path: 'generateotp', component: HistoryComponent },
  { path: 'invoice', component: MerchantInvoiceComponent },
  { path: 'generateotp', component: GenerateOtpComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AdminLayoutRoutes {
}
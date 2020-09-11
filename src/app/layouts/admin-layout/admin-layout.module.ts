import { GenerateOtpComponent } from './../../generate-otp/generate-otp.component';
import { MerchantInvoiceComponent } from '../../merchant-invoice/merchant-invoice.component';
import { OutdatedCouponsIndivualComponent } from './../../outdated-coupons-indivual/outdated-coupons-indivual.component';
import { ActiveCouponsIndivualComponent } from './../../active-coupons-indivual/active-coupons-indivual.component';
import { OutdatedCouponsComponent } from './../../outdated-coupons/outdated-coupons.component';
import { ActiveCouponsComponent } from './../../active-coupons/active-coupons.component';
import { MercahntDashboardModule } from './../../merchant-dashboard/merchant-dashboard.module';
import { MediaComponent } from './../../media/media.component';
import { UserCouponsComponent } from './../../user-coupons/user-coupons.component';
import { SubscriptionDetailsComponent } from './../../subscription-details/subscription-details.component';
import { FaqComponent } from './../../faq/faq.component';
import { HistoryComponent } from './../../history/history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgxImageDisplayModule } from '@creativeacer/ngx-image-display';
import { MerchantDashboardComponent } from './../../merchant-dashboard/merchant-dashboard.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminLayoutRoutes,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MercahntDashboardModule,
    NgxImageDisplayModule.forRoot(),
  ],
  declarations: [
    UserCouponsComponent,
    MediaComponent,
    HistoryComponent,
    SubscriptionDetailsComponent,
    FaqComponent,
    ActiveCouponsComponent,
    OutdatedCouponsComponent,
    ActiveCouponsIndivualComponent,
    OutdatedCouponsIndivualComponent,
    MerchantInvoiceComponent,
    MerchantDashboardComponent,
    GenerateOtpComponent
  ]
})

export class AdminLayoutModule { }

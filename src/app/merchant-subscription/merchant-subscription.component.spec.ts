import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSubscriptionComponent } from './merchant-subscription.component';

describe('MerchantSubscriptionComponent', () => {
  let component: MerchantSubscriptionComponent;
  let fixture: ComponentFixture<MerchantSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

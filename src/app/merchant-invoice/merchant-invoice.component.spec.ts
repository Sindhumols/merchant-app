import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantInvoiceComponent } from './merchant-invoice.component';

describe('MerchantInvoiceComponent', () => {
  let component: MerchantInvoiceComponent;
  let fixture: ComponentFixture<MerchantInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

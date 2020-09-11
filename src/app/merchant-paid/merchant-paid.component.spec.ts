import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPaidComponent } from './merchant-paid.component';

describe('MerchantPaidComponent', () => {
  let component: MerchantPaidComponent;
  let fixture: ComponentFixture<MerchantPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

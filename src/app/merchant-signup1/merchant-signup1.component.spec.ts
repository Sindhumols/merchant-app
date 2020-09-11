import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSignup1Component } from './merchant-signup1.component';

describe('MerchantSignup1Component', () => {
  let component: MerchantSignup1Component;
  let fixture: ComponentFixture<MerchantSignup1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSignup1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSignup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

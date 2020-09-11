import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdatedCouponsComponent } from './outdated-coupons.component';

describe('OutdatedCouponsComponent', () => {
  let component: OutdatedCouponsComponent;
  let fixture: ComponentFixture<OutdatedCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdatedCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdatedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

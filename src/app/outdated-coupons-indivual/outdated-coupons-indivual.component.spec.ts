import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdatedCouponsIndivualComponent } from './outdated-coupons-indivual.component';

describe('OutdatedCouponsIndivualComponent', () => {
  let component: OutdatedCouponsIndivualComponent;
  let fixture: ComponentFixture<OutdatedCouponsIndivualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdatedCouponsIndivualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdatedCouponsIndivualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

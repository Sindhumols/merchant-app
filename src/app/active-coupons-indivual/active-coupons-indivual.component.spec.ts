import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCouponsIndivualComponent } from './active-coupons-indivual.component';

describe('ActiveCouponsIndivualComponent', () => {
  let component: ActiveCouponsIndivualComponent;
  let fixture: ComponentFixture<ActiveCouponsIndivualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCouponsIndivualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCouponsIndivualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

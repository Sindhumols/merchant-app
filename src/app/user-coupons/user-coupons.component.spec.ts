import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCouponsComponent } from './user-coupons.component';

describe('UserCouponsComponent', () => {
  let component: UserCouponsComponent;
  let fixture: ComponentFixture<UserCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

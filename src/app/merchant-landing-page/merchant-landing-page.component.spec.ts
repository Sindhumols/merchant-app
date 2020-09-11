import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantLandingPageComponent } from './merchant-landing-page.component';

describe('MerchantLandingPageComponent', () => {
  let component: MerchantLandingPageComponent;
  let fixture: ComponentFixture<MerchantLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

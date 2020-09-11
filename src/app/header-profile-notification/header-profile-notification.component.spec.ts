import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileNotificationComponent } from './header-profile-notification.component';

describe('HeaderProfileNotificationComponent', () => {
  let component: HeaderProfileNotificationComponent;
  let fixture: ComponentFixture<HeaderProfileNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProfileNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfileNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

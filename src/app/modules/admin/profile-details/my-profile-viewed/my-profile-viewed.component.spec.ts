import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileViewedComponent } from './my-profile-viewed.component';

describe('MyProfileViewedComponent', () => {
  let component: MyProfileViewedComponent;
  let fixture: ComponentFixture<MyProfileViewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileViewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShortlistProfilesComponent } from './my-shortlist-profiles.component';

describe('MyShortlistProfilesComponent', () => {
  let component: MyShortlistProfilesComponent;
  let fixture: ComponentFixture<MyShortlistProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyShortlistProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShortlistProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

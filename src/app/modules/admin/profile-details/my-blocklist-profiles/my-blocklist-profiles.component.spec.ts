import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlocklistProfilesComponent } from './my-blocklist-profiles.component';

describe('MyBlocklistProfilesComponent', () => {
  let component: MyBlocklistProfilesComponent;
  let fixture: ComponentFixture<MyBlocklistProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBlocklistProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlocklistProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

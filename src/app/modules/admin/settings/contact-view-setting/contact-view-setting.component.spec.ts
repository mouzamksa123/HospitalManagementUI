import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewSettingComponent } from './contact-view-setting.component';

describe('ContactViewSettingComponent', () => {
  let component: ContactViewSettingComponent;
  let fixture: ComponentFixture<ContactViewSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactViewSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactViewSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

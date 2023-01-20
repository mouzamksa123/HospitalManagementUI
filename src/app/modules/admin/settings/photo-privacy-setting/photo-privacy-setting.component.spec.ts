import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPrivacySettingComponent } from './photo-privacy-setting.component';

describe('PhotoPrivacySettingComponent', () => {
  let component: PhotoPrivacySettingComponent;
  let fixture: ComponentFixture<PhotoPrivacySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPrivacySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPrivacySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

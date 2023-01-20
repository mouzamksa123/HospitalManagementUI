import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumbersViewedComponent } from './mobile-numbers-viewed.component';

describe('MobileNumbersViewedComponent', () => {
  let component: MobileNumbersViewedComponent;
  let fixture: ComponentFixture<MobileNumbersViewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNumbersViewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNumbersViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

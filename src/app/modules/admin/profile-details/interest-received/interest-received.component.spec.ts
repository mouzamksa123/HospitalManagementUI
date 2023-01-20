import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestReceivedComponent } from './interest-received.component';

describe('InterestReceivedComponent', () => {
  let component: InterestReceivedComponent;
  let fixture: ComponentFixture<InterestReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

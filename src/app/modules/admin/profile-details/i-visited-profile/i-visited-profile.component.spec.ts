import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVisitedProfileComponent } from './i-visited-profile.component';

describe('IVisitedProfileComponent', () => {
  let component: IVisitedProfileComponent;
  let fixture: ComponentFixture<IVisitedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVisitedProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IVisitedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

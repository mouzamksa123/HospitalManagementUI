import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySavedSearchesComponent } from './my-saved-searches.component';

describe('MySavedSearchesComponent', () => {
  let component: MySavedSearchesComponent;
  let fixture: ComponentFixture<MySavedSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySavedSearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySavedSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

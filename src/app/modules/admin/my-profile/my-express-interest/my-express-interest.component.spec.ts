import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExpressInterestComponent } from './my-express-interest.component';

describe('MyExpressInterestComponent', () => {
  let component: MyExpressInterestComponent;
  let fixture: ComponentFixture<MyExpressInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExpressInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExpressInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

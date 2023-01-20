import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPasswordRequestComponent } from './photo-password-request.component';

describe('PhotoPasswordRequestComponent', () => {
  let component: PhotoPasswordRequestComponent;
  let fixture: ComponentFixture<PhotoPasswordRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPasswordRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPasswordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

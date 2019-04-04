import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipSignupComponent } from './pip-signup.component';

describe('PipSignupComponent', () => {
  let component: PipSignupComponent;
  let fixture: ComponentFixture<PipSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

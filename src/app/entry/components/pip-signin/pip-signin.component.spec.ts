import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipSigninComponent } from './pip-signin.component';

describe('PipSigninComponent', () => {
  let component: PipSigninComponent;
  let fixture: ComponentFixture<PipSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

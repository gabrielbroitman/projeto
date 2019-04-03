import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploLoginComponent } from './exemplo-login.component';

describe('ExemploLoginComponent', () => {
  let component: ExemploLoginComponent;
  let fixture: ComponentFixture<ExemploLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

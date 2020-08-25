import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kind2Component } from './kind2.component';

describe('Kind2Component', () => {
  let component: Kind2Component;
  let fixture: ComponentFixture<Kind2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kind2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kind2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

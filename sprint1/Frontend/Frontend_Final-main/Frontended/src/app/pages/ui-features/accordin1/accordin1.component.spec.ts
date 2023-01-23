import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordin1Component } from './accordin1.component';

describe('Accordin1Component', () => {
  let component: Accordin1Component;
  let fixture: ComponentFixture<Accordin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accordin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Accordin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

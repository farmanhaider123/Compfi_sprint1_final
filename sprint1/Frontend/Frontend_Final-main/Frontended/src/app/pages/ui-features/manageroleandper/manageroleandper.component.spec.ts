import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageroleandperComponent } from './manageroleandper.component';

describe('ManageroleandperComponent', () => {
  let component: ManageroleandperComponent;
  let fixture: ComponentFixture<ManageroleandperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageroleandperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageroleandperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

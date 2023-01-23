import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordinComponent } from './acordin.component';

describe('AcordinComponent', () => {
  let component: AcordinComponent;
  let fixture: ComponentFixture<AcordinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPaymentsComponent } from './e-payments.component';

describe('EPaymentsComponent', () => {
  let component: EPaymentsComponent;
  let fixture: ComponentFixture<EPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMappingComponent } from './report-mapping.component';

describe('ReportMappingComponent', () => {
  let component: ReportMappingComponent;
  let fixture: ComponentFixture<ReportMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserGroupDialogComponent } from './new-user-group-dialog.component';

describe('NewUserGroupDialogComponent', () => {
  let component: NewUserGroupDialogComponent;
  let fixture: ComponentFixture<NewUserGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

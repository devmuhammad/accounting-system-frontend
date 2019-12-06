import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRoleDialogComponent } from './new-user-role-dialog.component';

describe('NewUserRoleDialogComponent', () => {
  let component: NewUserRoleDialogComponent;
  let fixture: ComponentFixture<NewUserRoleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserRoleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserRoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

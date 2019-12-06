import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-new-user-role-dialog",
  templateUrl: "./new-user-role-dialog.component.html",
  styleUrls: ["./new-user-role-dialog.component.css"]
})
export class NewUserRoleDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewUserRoleDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      task: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  // Create New User Group
  createNewUserGroup(form) {
    this.dialogRef.close(`${form.value.task}, ${form.value.description}`);
  }
}

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
  selector: "app-new-user-group-dialog",
  templateUrl: "./new-user-group-dialog.component.html",
  styleUrls: ["./new-user-group-dialog.component.css"]
})
export class NewUserGroupDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewUserGroupDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: ["", Validators.required]
    });
  }

  // Create New User Group
  createNewUserGroup(form) {
    this.dialogRef.close(`${form.value.description}`);
  }
}

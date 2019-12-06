import { Component, OnInit, Injectable, Inject } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-new-user-dialog",
  templateUrl: "./new-user-dialog.component.html",
  styleUrls: ["./new-user-dialog.component.css"]
})
export class NewUserDialogComponent implements OnInit {
  form: FormGroup;

  firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
  }

  onSave() {
    console.log(this.form);
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

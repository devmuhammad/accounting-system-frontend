import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { NewUserGroupDialogComponent } from "./new-user-group-dialog/new-user-group-dialog.component";

export interface UserGroups {
  description: string;
}

const ELEMENT_DATA: UserGroups[] = [
  { description: "Administrator" },
  { description: "Managing Director" },
  { description: "Financial Controller" },
  { description: "Head of Account" },
  { description: "Cashier" },
  { description: "Reports" },
  { description: "Accountants" }
];

@Component({
  selector: "app-user-groups",
  templateUrl: "./user-groups.component.html",
  styleUrls: ["./user-groups.component.css"]
})
export class UserGroupsComponent implements OnInit {
  displayedColumns: string[] = ["select", "description", "actions"];
  dataSource = new MatTableDataSource<UserGroups>(ELEMENT_DATA);
  selection = new SelectionModel<UserGroups>(true, []);

  userGroupDialogRef: MatDialogRef<NewUserGroupDialogComponent>;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserGroups): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.description + 1}`;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  // Open create new user group dialog
  openUserGroupDialog() {
    this.userGroupDialogRef = this.dialog.open(NewUserGroupDialogComponent);
  }
}

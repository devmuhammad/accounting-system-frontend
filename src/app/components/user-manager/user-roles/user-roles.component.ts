import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { NewUserRoleDialogComponent } from "./new-user-role-dialog/new-user-role-dialog.component";

export interface UserRoles {
  task: string;
  description: string;
}

const ELEMENT_DATA: UserRoles[] = [
  {
    task: "Manage Accounts",
    description: "Create and modify Charts of accounts"
  },
  {
    task: "Manage Fixed Assets",
    description: "Create and modify Fixed Assets"
  },
  {
    task: "Manage Invenotry/Service",
    description: "Create and manage Inventory/Service items"
  },
  {
    task: "Manage Projects",
    description: "Create and manage project cost code"
  },
  {
    task: "Transaction Invoice",
    description: "Manage and Post sales and purchases invoice transaction"
  },
  {
    task: "Transaction Reciept",
    description: "Manage and Post reciept transaction"
  },
  {
    task: "Transaction Payment",
    description: "Manage and Post payment transaction"
  },
  {
    task: "Transaction Payroll",
    description: "Prepare and post payroll transactions"
  },
  {
    task: "Report Account Statement",
    description: "View and print GL and subaccount statement of account"
  },
  {
    task: "Report Statement of comprehensive Income",
    description: "View and print income statement of the organization"
  }
];

@Component({
  selector: "app-user-roles",
  templateUrl: "./user-roles.component.html",
  styleUrls: ["./user-roles.component.css"]
})
export class UserRolesComponent implements OnInit {
  displayedColumns: string[] = ["select", "task", "description"];
  dataSource = new MatTableDataSource<UserRoles>(ELEMENT_DATA);
  selection = new SelectionModel<UserRoles>(true, []);

  userRoleDialogRef: MatDialogRef<NewUserRoleDialogComponent>;

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
  checkboxLabel(row?: UserRoles): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.description + 1}`;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  // Open create new user role dialog
  openUserRoleDialog() {
    this.userRoleDialogRef = this.dialog.open(NewUserRoleDialogComponent, {
      width: "300px"
    });
  }
}

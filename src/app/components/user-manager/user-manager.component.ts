import { Component, OnInit, ViewChild } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NewUserDialogComponent } from "./new-user-dialog/new-user-dialog.component";
import { UserGroupsComponent } from "./user-groups/user-groups.component";
// import { UserRolesComponent } from "./user-roles/user-roles.component";

export interface UserInformation {
  index: number;
  name: string;
  userName: string;
  deptmnt_location: string;
  dateCreated: string;
  lastLogin: string;
  drLimit: number;
  crLimit: number;
}

const ELEMENT_DATA: UserInformation[] = [
  {
    index: 1,
    userName: "johndoe@johndoe.com",
    name: "Joen Doe",
    deptmnt_location: "HR",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  },
  {
    index: 2,
    userName: "johndoe@johndoe.com",
    name: "Joen Smith",
    deptmnt_location: "IT",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  },
  {
    index: 3,
    userName: "johndoe@johndoe.com",
    name: "Joen Smith",
    deptmnt_location: "IT",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  },
  {
    index: 4,
    userName: "johndoe@johndoe.com",
    name: "Joen Smith",
    deptmnt_location: "IT",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  },
  {
    index: 5,
    userName: "johndoe@johndoe.com",
    name: "Joen Smith",
    deptmnt_location: "IT",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  },
  {
    index: 6,
    userName: "johndoe@johndoe.com",
    name: "Joen Smith",
    deptmnt_location: "IT",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  },
  {
    index: 7,
    userName: "johndoe@johndoe.com",
    name: "Joen Smith",
    deptmnt_location: "IT",
    dateCreated: "12/12/12",
    lastLogin: "12/12/12 00:00",
    drLimit: 0.0,
    crLimit: 0.0
  }
];

@Component({
  selector: "app-user-manager",
  templateUrl: "./user-manager.component.html",
  styleUrls: ["./user-manager.component.css"]
})
export class UserManagerComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "name",
    "userName",
    "deptmnt_location",
    "dateCreated",
    "lastLogin",
    "drLimit",
    "crLimit",
    "actions"
  ];
  dataSource = new MatTableDataSource<UserInformation>(ELEMENT_DATA);
  selection = new SelectionModel<UserInformation>(true, []);

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
  checkboxLabel(row?: UserInformation): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.userName + 1}`;
  }

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = "500px";
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: "Add New User"
    };
    this.dialog.open(NewUserDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(NewUserDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe(data => console.log("Dialog output: ", data));
  }

  ngOnInit() {}
}

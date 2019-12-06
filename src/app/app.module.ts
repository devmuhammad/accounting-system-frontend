import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { MatFileUploadModule } from 'angular-material-fileupload';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AngularMaterialModule } from "./angular-material.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ReportMappingComponent } from "./components/report-mapping/report-mapping.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AccountsComponent } from "./components/accounts/accounts.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { UserManagerComponent } from "./components/user-manager/user-manager.component";
import { FixedAssetsComponent } from "./components/fixed-assets/fixed-assets.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { EPaymentsComponent } from "./components/e-payments/e-payments.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthlayoutComponent } from "./layout/authlayout/authlayout.component";
import { GeneralSettingsComponent } from "./components/settings/general-settings/general-settings.component";
import { addNewSubOrg } from "./components/settings/general-settings/general-settings.component";
import { OtherSettingsComponent } from "./components/settings/other-settings/other-settings.component";
import { NewUserDialogComponent } from "./components/user-manager/new-user-dialog/new-user-dialog.component";
import { NewUserGroupDialogComponent } from "./components/user-manager/user-groups/new-user-group-dialog/new-user-group-dialog.component";
import { UserGroupsComponent } from "./components/user-manager/user-groups/user-groups.component";
import { UserRolesComponent } from "./components/user-manager/user-roles/user-roles.component";
import { NewUserRoleDialogComponent } from "./components/user-manager/user-roles/new-user-role-dialog/new-user-role-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    SettingsComponent,
    DashboardComponent,
    ReportMappingComponent,
    ProjectsComponent,
    AccountsComponent,
    TransactionsComponent,
    UserManagerComponent,
    FixedAssetsComponent,
    InventoryComponent,
    ReportsComponent,
    EPaymentsComponent,
    LoginComponent,
    AuthlayoutComponent,
    GeneralSettingsComponent,
    OtherSettingsComponent,
    addNewSubOrg,
    NewUserDialogComponent,
    NewUserGroupDialogComponent,
    UserGroupsComponent,
    UserRolesComponent,
    NewUserRoleDialogComponent
  ],
  entryComponents: [
    addNewSubOrg,
    NewUserDialogComponent,
    NewUserGroupDialogComponent,
    NewUserRoleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
    // MatFileUploadModule
  ],
  // exports:[addNewSubOrg],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

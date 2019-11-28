import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFileUploadModule } from 'angular-material-fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportMappingComponent } from './components/report-mapping/report-mapping.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { FixedAssetsComponent } from './components/fixed-assets/fixed-assets.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EPaymentsComponent } from './components/e-payments/e-payments.component';
import { GeneralSettingsComponent } from './components/settings/general-settings/general-settings.component';
import { addNewSubOrg } from './components/settings/general-settings/general-settings.component';
import { OtherSettingsComponent } from './components/settings/other-settings/other-settings.component';

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
    GeneralSettingsComponent,
    OtherSettingsComponent,
    addNewSubOrg
  ],
  entryComponents: [addNewSubOrg],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFileUploadModule
  ],
  // exports:[addNewSubOrg],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

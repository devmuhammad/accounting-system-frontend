import { EPaymentsComponent } from "./components/e-payments/e-payments.component";
import { FixedAssetsComponent } from "./components/fixed-assets/fixed-assets.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { ReportMappingComponent } from "./components/report-mapping/report-mapping.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { UserManagerComponent } from "./components/user-manager/user-manager.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AccountsComponent } from "./components/accounts/accounts.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: "", component: DashboardComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "transactions", component: TransactionsComponent },
  { path: "usermanager", component: UserManagerComponent },
  { path: "reports", component: ReportsComponent },
  { path: "reportmapping", component: ReportMappingComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "fixedassets", component: FixedAssetsComponent },
  { path: "epayment", component: EPaymentsComponent }
  // { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

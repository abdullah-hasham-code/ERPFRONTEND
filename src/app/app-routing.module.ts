import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { RentedShopsComponent } from './rented-shops/rented-shops.component';
import { UnRentedShopsComponent } from './un-rented-shops/un-rented-shops.component';
import { RptIncomeComponent } from './rpt-income/rpt-income.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { RecurringInvoicesComponent } from './recurring-invoices/recurring-invoices.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { PaymentReceivedComponent } from './payment-received/payment-received.component';
import { PaymentReceivedFormComponent } from './payment-received-form/payment-received-form.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { CustomerLedgerComponent } from './customer-ledger/customer-ledger.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCatListComponent } from './account-cat-list/account-cat-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountGroupListComponent } from './account-group-list/account-group-list.component';
import { AccountGroupFormComponent } from './account-group-form/account-group-form.component';
import { AccountCatFormComponent } from './account-cat-form/account-cat-form.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'user-list', component: UserListComponent, },
  { path: 'user-form', component: UserFormComponent,},
  { path: 'user-form/:id', component: UserFormComponent ,},
  { path: 'shop-form', component: ShopFormComponent ,},
  { path: 'shop-form/:id', component: ShopFormComponent ,},
  { path: 'shop-list', component: ShopListComponent ,},
  { path: 'rent-list', component: RentListComponent ,},
  { path: 'rent-form', component: RentFormComponent ,},
  { path: 'rent-form/:id', component: RentFormComponent ,},
  { path: 'rnt-shp', component: RentedShopsComponent ,},
  { path: 'un-rnt-shp', component: UnRentedShopsComponent ,},
  { path: 'rpt-income', component: RptIncomeComponent ,},
  { path: 'rpt-income', component: RptIncomeComponent ,},
  { path: 'rpt-invoice', component: InvoiceReportComponent ,},
  { path: 'cust-ledger', component: CustomerLedgerComponent ,},
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  {path: 'recurringinvoices', component: RecurringInvoicesComponent,},
  {path:'creditnotes', component: CreditNotesComponent,},
  {path: 'vendors', component: VendorsComponent,},
  {path:'expenses', component: ExpensesComponent,},
  {path:'purchaseorder', component: PurchaseOrderComponent,},
  {path: 'customers', component: CustomersComponent,},
  {path:'customerform', component: CustomerFormComponent,},
  {path:'customerform/:id', component: CustomerFormComponent,},
  {path:'invoices', component: InvoicesComponent,},
  {path: 'invoice-form', component:InvoiceFormComponent},
  {path: 'invoice-form/:id', component:InvoiceFormComponent},
  {path:'paymentreceived', component: PaymentReceivedComponent,},
  {path:'payment-received-form', component: PaymentReceivedFormComponent},
  {path: 'payment-received-form/:id', component: PaymentReceivedFormComponent},
  { path: 'account-list', component: AccountListComponent, },
  { path: 'account-form', component: AccountFormComponent,},
  { path: 'account-form/:id', component: AccountFormComponent ,},
  { path: 'account-grp-list', component: AccountGroupListComponent, },
  { path: 'account-grp-form', component: AccountGroupFormComponent,},
  { path: 'account-grp-form/:id', component: AccountGroupFormComponent ,},
  { path: 'account-cat-list', component: AccountCatListComponent, },
  { path: 'account-cat-form', component: AccountCatFormComponent,},
  { path: 'account-cat-form/:id', component: AccountCatFormComponent ,},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

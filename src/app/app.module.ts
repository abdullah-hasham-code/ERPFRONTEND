import { CUSTOM_ELEMENTS_SCHEMA, NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {AnimateModule} from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { DatePipe } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RentedShopsComponent } from './rented-shops/rented-shops.component';
import { UnRentedShopsComponent } from './un-rented-shops/un-rented-shops.component';
import { RptIncomeComponent } from './rpt-income/rpt-income.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { RecurringInvoicesComponent } from './recurring-invoices/recurring-invoices.component';
import { PaymentReceivedComponent } from './payment-received/payment-received.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { PaymentReceivedFormComponent } from './payment-received-form/payment-received-form.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { CustomerLedgerComponent } from './customer-ledger/customer-ledger.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ShopListComponent,
    ShopFormComponent,
    RentListComponent,
    SidebarComponent,
    RentFormComponent,
    RentFormComponent,
    SidebarComponent,
    RentedShopsComponent,
    UnRentedShopsComponent,
    RptIncomeComponent,
    LoginComponent,
    DashboardComponent,
    CustomersComponent,
    InvoicesComponent,
    RecurringInvoicesComponent,
    PaymentReceivedComponent,
    CreditNotesComponent,
    VendorsComponent,
    ExpensesComponent,
    PurchaseOrderComponent,
    CustomerFormComponent,
    InvoiceFormComponent,
    PaymentReceivedFormComponent,
    InvoiceReportComponent,
    CustomerLedgerComponent
  ],
  imports: [
    HttpClientModule,TableModule,DividerModule,FormsModule,ReactiveFormsModule,DropdownModule,AccordionModule,
    BrowserModule,AnimateModule,BrowserAnimationsModule,ToastModule,ConfirmDialogModule,CalendarModule,
    ButtonModule,DividerModule,DialogModule,
    AppRoutingModule
  ],
  providers: [ConfirmationService,MessageService,DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

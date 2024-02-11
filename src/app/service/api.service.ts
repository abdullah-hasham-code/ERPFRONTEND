import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private app: AppService) { }
	login(obj: any) {
		return this.app.post('Login', obj);
	}
	getAllUser() {
		return this.app.get('getAllUser');
	}
	getUserById(id: any) {
		return this.app.get('getUserById?id=' + id, id);
	}
	getAllUserType() {
		return this.app.get('getAllUserType');
	}
	createUser(obj: any) {
		return this.app.post('createUser', obj);
	}
	deleteUserById(id: any) {
		return this.app.get('deleteUserById?id=' + id, id);
	}
	//Account
	getAllAccount() {
		return this.app.get('getAllAccount');
	}
	getAccountById(id: any) {
		return this.app.get('getAccountById?id=' + id, id);
	} 
	createAccount(obj: any) {
		return this.app.post('createAccount', obj);
	}
	deleteAccountById(id: any) {
		return this.app.get('deleteAccountById?id=' + id, id);
	}

	//AccountCategory
	getAllAccountCat() {
		return this.app.get('getAllAccountCategory');
	}
	createAccountCategory(obj: any) {
		return this.app.post('createAccountCategory', obj);
	}
	getAccountCatById(id: any) {
		return this.app.get('getAccountCategoryById?id=' + id, id);
	} 
	//AccountType
	getAllAccountType() {
		return this.app.get('getAllAccountType');
	}
	//AccountGroup
	getAllAccountGroup() {
		return this.app.get('getAllAccGroup');
	}
	
	getAccountGroupById(id: any) {
		return this.app.get('getAccGroupById?id=' + id, id);
	} 
	createAccountGroup(obj: any) {
		return this.app.post('createAccGroup', obj);
	}
	getAllShop() {
		return this.app.get('getAllShops');
	}
	getShopById(id: any) {
		return this.app.get('getShopById?id=' + id, id);
	}
	createShop(obj: any) {
		return this.app.post('createShop', obj);
	}
	getAllShopsType() {
		return this.app.get('getAllShopsType');
	}
	getAllMonth() {
		return this.app.get('getAllMonths');
	}
	getAllRentTypes() {
		return this.app.get('getAllRents');
	}
	getRentById(id: any) {
		return this.app.get('getRentById?id=' + id, id);
	}
	createRent(obj: any) {
		return this.app.post('createRent', obj);
	}
	getAllMonthTypes() {
		return this.app.get('getAllMonths');
	}
	getAllAgreementTypes() {
		return this.app.get('getAllAgreementTypes');
	}
	getUnRentedshops(obj: any) {
		return this.app.post('getUnRentedShops', obj);
	}
	getRentedshops(obj: any) {
		return this.app.post('getRentedShops', obj);
	}
	getIncomeReport(obj: any) {
		return this.app.post('getIncomeReport', obj);
	}
	deleteRentbyId(id: any) {
		return this.app.get('deleteRentById?id=' + id, id);
	}
	deleteShopById(id: any) {
		return this.app.get('deleteShopById?id=' + id, id);
	}
	createCustomerdetails(obj:any){
		return this.app.post('createCustomerdetails', obj);
	}
	getAllCustomers() {
		return this.app.get('getAllCustomersdetails');
	}
	getCustomerById(id: any) {
		return this.app.get('getCustomerdetailsById?id=' + id, id);
	}
	deleteCustomerbyId(id: any) {
		return this.app.get('deleteCustomerdetailsById?id=' + id, id);
	}
	createInvoicedetails(obj:any){
		return this.app.post('createInvoicedetails', obj);
	}
	getInvoicedetailsById(id: any) {
		return this.app.get('getInvoicedetailsById?id=' + id, id);
	}
	getAllInvoicedetails() {
		return this.app.get('getAllInvoicedetails');
	}
	deleteInvoicebyId(id: any) {
		return this.app.get('deleteInvoicedetailsById?id=' + id, id);
	}
	getReceivedPaymentsById(id: any) {
		return this.app.get('getReceivedPaymentsById?id=' + id, id);
	}
	createReceivedPayments(obj:any){
		return this.app.post('createReceivedPayments', obj);
	}
	deleteReceivedPaymentsById(id: any) {
		return this.app.get('deleteReceivedPaymentsById?id=' + id, id);
	}
	getAllReceivedPaymentsdetails() {
		return this.app.get('getAllReceivedPaymentsdetails');
	}
	getAllPaymentTerms() {
		return this.app.get('getAllPaymentTerms');
	}

	getAllPaymentTypes() {
		return this.app.get('getAllPaymentTypes');
	}

	getAllPaymentModes() {
		return this.app.get('getAllPaymentModes');
	}
	getbyinvoicedetailsbycustomer(cust:String) {
		return this.app.get('getbyinvoicedetailsbycustomer?cust='+cust);
	}

	getInvoicedetailsByCustomerId(id:number) {
		return this.app.get('getInvoicedetailsByCustomerId?id='+id);
	}
	getCustomerLedgerByCustomerId(id:number) {
		return this.app.get('getCustomerLedgerByCustomerId?id='+id);
	}
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-account-cat-form',
  templateUrl: './account-cat-form.component.html',
  styleUrls: ['./account-cat-form.component.css']
})
export class AccountCatFormComponent {
  constructor(private route: ActivatedRoute,private router: Router,private api: ApiService,private messageService: MessageService,) { }
  formData: any = {  };//Abdullah
  userTypes:any=[];
  genders:any=[{label:'Male',value:'Male'},{label:'Female',value:'Female'}];
  urlId: any;
  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('id');
    this.getUserType();
    this.getAccountType();
    this.getUserGroup();
    if (this.urlId) {
      this.getUserById(this.urlId);
    }
	}
  getUserById(id: any) {
		this.api.getAccountCatById(String(id)).subscribe(res => {
			this.formData = res[0];
		})
	}
  cancel(){
    this.router.navigate(['account-cat-list']);
  }
  accType:any=[]
  getAccountType(){
    this.api.getAllAccountType().subscribe(res=>{
      this.accType=res;
    })
  }
  addUser(){

	this.urlId?this.formData.id=this.urlId:undefined;
	this.api.createAccountCategory(this.formData).subscribe(res=>{
		this.router.navigate(['account-cat-list']);
		this.messageService.add({ severity: 'success', summary: 'Success', detail: "User Saved Successfully" });	
		},err=>{
	
		})

  }
  getUserType(){
    this.api.getAllUserType().subscribe(res=>{
      this.userTypes=res;
    })
  }
  usrGrpCat:any=[];
  getUserGroup(){
    this.api.getAllAccountCat().subscribe(res=>{
      this.usrGrpCat=res;
    })
  }
}

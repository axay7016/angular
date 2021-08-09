import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public id = localStorage.getItem('id');
  public users:any;
  public role:any
  public tab = 'user'
  public token = localStorage.getItem('token')
  constructor(
    private userSrv: UserServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getUser()
     this.getUsers();
  }
  getUser(){
    this.userSrv.getUser(this.id,this.token).subscribe((res)=>{
      this.role= res[0].role;
    })
  }
  selectTab(item:any){
    this.tab = item;
  }
  userDelete(id:number){
    this.userSrv.deleteUser(id,this.token).subscribe((res)=>{
      console.log("rrr",res)
    })
    this.getUsers();
  }
  userLogout(){
    localStorage.clear();
    this.route.navigate([''])
  }
  getUsers(){
    this.userSrv.getUsers(this.token).subscribe((res)=>{
      this.users= res;
      console.log("usersss",res) 
    })
  }

  userPromotion(role:string,id:number){
    console.log('roleee',role)
    console.log('id',id)
    if(role=== 'user'){
      role='author'
    }
    else{
      role='user'
    }
    this.userSrv.updateRole(role,id,this.token).subscribe((res)=>{
    })
    this.getUsers();
  }

}

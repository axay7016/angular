import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  signupForm: FormGroup
  public tab = 'post'; 
  public user: any;
  public id = localStorage.getItem('id')
  public token = localStorage.getItem('token')
  constructor(
    private route: Router,
    private userSrv: UserServiceService
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
        name: new FormControl(null),
        email: new FormControl(null),
        password: new FormControl(''),
        password_confirmation: new FormControl(''),
        id: new FormControl('')
      })
          this.getUser();
          
    }
  onSubmit(){
    this.userSrv.updateUser(this.signupForm.value,this.token).subscribe((res)=>{
      console.log("upaaaa",res)
    })
    this.route.navigate(['author'])
  }
  getUser(){
    this.userSrv.getUser(this.id,this.token).subscribe((res)=>{
      console.log('resss',res[0])
      this.user = res[0];
      this.signupForm.patchValue({
        name:this.user.name,
        email:this.user.email,
        id:this.user.id,
      })
    })
  }
  selectTab(item:any){
    this.tab = item;
  }
  userLogout(){
    localStorage.clear();
    this.route.navigate([''])
  }
}

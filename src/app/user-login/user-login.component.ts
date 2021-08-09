import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signupForm: FormGroup
  public userLogin= 'login';

  constructor( 
    private UserSrv : UserServiceService,
    private rout: Router
  ) { }
  ngOnInit(): void {

    this.signupForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl('')
    })
  
  }

  onSubmit(){
    console.log("valueeee",this.signupForm.value)
    this.UserSrv.userLogin(this.signupForm.value).subscribe((res)=>{
      console.log(res)
      localStorage.setItem('token',res.token)
      localStorage.setItem('id',res.user.id)
    //  let token= localStorage.getItem('token')
    //  this.UserSrv.getUsers(token).subscribe((res)=>{
    //    console.log("usersss",res) 
    //  })
      if(res.user.role === 'admin'){
        this.rout.navigate(['admin'])
      }
      else if(res.user.role === 'author'){
        this.rout.navigate(['author'])
      }
      else if(res.user.role === 'user'){
        this.rout.navigate(['users'])
      }
    })
  }
}

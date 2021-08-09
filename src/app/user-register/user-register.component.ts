import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  // registerform:any;
  // registerForm: FormGroup;
  signupForm: FormGroup
  constructor( 
    private UserSrv : UserServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
        password: new FormControl(''),
        password_confirmation: new FormControl(''),
        })
  

}
  onSubmit(){
    console.log("valueeee",this.signupForm.value)
    this.UserSrv.insertUser(this.signupForm.value).subscribe((res)=>{
      console.log(res)
    })
    this.route.navigate([''])
  }

}

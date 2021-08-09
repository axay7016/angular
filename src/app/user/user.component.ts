import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public token = localStorage.getItem('token');
  public id = localStorage.getItem('id')
  public user:any
  public posts:any
  constructor( 
    private userSrv: UserServiceService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.getPost()
    this.getUser();
  }

  getUser(){
    this.userSrv.getUser(this.id,this.token).subscribe((res)=>{
      this.user = res[0]
    })
  }

  getPost(){
    this.userSrv.getPosts(this.token).subscribe((res)=>{
      console.log('possst',res)
      this.posts = res
    })
  }
  userLogout(){
    localStorage.clear();
    this.route.navigate([''])
  }
}

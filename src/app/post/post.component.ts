import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public token = localStorage.getItem('token')
  public posts:any;
  @ViewChild('closeModal') closeModal: ElementRef;
  signupForm: FormGroup
  constructor(
    private userSrv: UserServiceService
  ) { }

  ngOnInit(): void {
    this.getPost();
    this.signupForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
    })
  }

  getPost(){
    this.userSrv.getPosts(this.token).subscribe((res)=>{
      console.log('possst',res)
      this.posts = res
    })
  }

  postDelete(id:number){
    this.userSrv.deletePost(id,this.token).subscribe((res)=>{
      console.log('delteee',res)
    })
    this.getPost();
  }
  onSubmit(){
    this.userSrv.addPost(this.signupForm.value,this.token).subscribe((res)=>{
      console.log(res)
    })
    this.closeModal.nativeElement.click();
    this.getPost();
  }
}

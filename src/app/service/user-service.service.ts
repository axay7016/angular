import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiUrl: any;
  header: any;
  constructor(
    private httpClient: HttpClient
  ) {
      this.apiUrl = 'http://127.0.0.1:8000/api/'
      
      
   }

   insertUser(value:any){
     return this.httpClient.post<any>(`${this.apiUrl}register`,value)
   }

   userLogin(value:any){
    return this.httpClient.post<any>(`${this.apiUrl}login`,value);
   }

   getUsers(token:any){
   this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
     return this.httpClient.get<any>(`${this.apiUrl}user`,{ headers : this.header })
   }

   getUser(id:any,token:any){
    this.header = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
     })
      return this.httpClient.get<any>(`${this.apiUrl}singleuser/${id}`,{ headers : this.header })
    }

    deleteUser(id:any,token:any){
      this.header = new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       })
        return this.httpClient.get<any>(`${this.apiUrl}userdelete/${id}`,{ headers : this.header })
      }

   updateRole(role:string, id:number,token:any){
     let data= {role,id};
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    })
     return this.httpClient.post<any>(`${this.apiUrl}userrole`,data,{ headers : this.header})
   }

   updateUser(value:any,token:any){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    })
     return this.httpClient.post<any>(`${this.apiUrl}updateuser`,value,{ headers : this.header})
   }
   addPost(value:any,token:any){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    })
     return this.httpClient.post<any>(`${this.apiUrl}addpost`,value,{ headers : this.header})
   }
   getPosts(token:any){
    this.header = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
     })
      return this.httpClient.get<any>(`${this.apiUrl}viewpost`,{ headers : this.header })
    }

    deletePost(id:number,token:any){
      this.header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
       return this.httpClient.get<any>(`${this.apiUrl}deletepost/${id}`,{ headers : this.header})
    }
}

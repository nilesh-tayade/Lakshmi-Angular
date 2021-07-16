import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }
user:any;
  baseUrl="http://localhost:8080/login/"

loginUser(loginrequest:any):Observable<any>
{
return this.http.post(this.baseUrl,loginrequest);
}

loginUserInApp(user :any)
{
localStorage.setItem('user',JSON.stringify(user));
}

isLoggedIn():boolean
{
if(localStorage.getItem('user')!=null){
  return true
}
return false;
}

getLoggedInUser():any
{
let user:any = JSON.parse(localStorage.getItem('user'))
return user;
}

logoutUser(){
  localStorage.removeItem('user');
  this.router.navigate(['/login'])
}

}

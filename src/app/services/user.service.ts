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
  baseUrl="http://localhost:8080/user/login/"

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


getApplicationForms():Observable<any>
{
  return this.http.get<any>("http://localhost:8080/form/")
}

getApplicationFormsByApplicant(id:number):Observable<any>
{
  return this.http.get<any>("http://localhost:8080/form/applicant/"+id)
}

applyLoan(form:any):Observable<any>
{
  return this.http.post<any>("http://localhost:8080/form/",form);
}

RegisteUser(applicant:any):Observable<any>
{
return this.http.post("http://localhost:8080/applicant/",applicant);
}

getCreditScoreUser(id:number,form)
{
return this.http.put("http://localhost:8080/form/creditScore/"+id,form);
}

getCreditScoreApprovedUser()
{
return this.http.get("http://localhost:8080/form/creditOk/");
}

getLoanApprovedFiles()
{
return this.http.get("http://localhost:8080/form/loanApproved/");
}

approveCreditScoreUser(id:number,form)
{
return this.http.put("http://localhost:8080/form/creditOk/"+id,form);
}

verifyDocuments(id:number,form)
{
return this.http.put("http://localhost:8080/form/documentVerified/"+id,form);
}

disburseLoan(id:number,form)
{
return this.http.put("http://localhost:8080/form/loanDisbursed/"+id,form);
}




getAllApplicant()
{
  return this.http.get("http://localhost:8080/applicant/");
}

getAllApplicantByBranch(id:number)
{
  return this.http.get("http://localhost:8080/applicant/branch/"+id);
}


getAllElectroniItems()
{
  return this.http.get("http://localhost:8080/electronicItem/")
}

getLoanType()
{
  return this.http.get("http://localhost:8080/loanType/")
}

getAllUser()
{
  return this.http.get("http://localhost:8080/user/")
}

saveLoanType(loanType:any)
{
  return this.http.post("http://localhost:8080/loanType/",loanType)
}

saveElectronicItem(electronicItem:any)
{
  return this.http.post("http://localhost:8080/electronicItem/",electronicItem)
}


}

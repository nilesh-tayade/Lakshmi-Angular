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
  baseUrl="http://localhost:8080/"

loginUser(loginrequest:any):Observable<any>
{
return this.http.post(this.baseUrl+"user/login/",loginrequest);
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
  return this.http.get<any>(this.baseUrl+"form/")
}

getDisbursedForms():Observable<any>
{
  return this.http.get<any>(this.baseUrl+"form/loanDisbursed/")
}

getApplicationFormById(id:number):Observable<any>
{
  return this.http.get<any>(this.baseUrl+"form/"+id);
}


getApplicationFormsByApplicant(id:number):Observable<any>
{
  return this.http.get<any>(this.baseUrl+"form/applicant/"+id)
}

getApplicationFormsByApplicantDisbursed(id:number):Observable<any>
{
  return this.http.get<any>(this.baseUrl+"form/applicantDisbursed/"+id)
}


applyLoan(form:any):Observable<any>
{
  return this.http.post<any>(this.baseUrl+"form/",form);
}

RegisteUser(applicant:any):Observable<any>
{
return this.http.post(this.baseUrl+"applicant/",applicant);
}

getCreditScoreUser(id:number,form)
{
return this.http.put(this.baseUrl+"form/creditScore/"+id,form);
}

getCreditScoreApprovedUser()
{
return this.http.get(this.baseUrl+"form/creditOk/");
}

getCreditScoreRejectedUser()
{
return this.http.get(this.baseUrl+"form/creditRejected/");
}



getLoanApprovedFiles()
{
return this.http.get(this.baseUrl+"form/loanApproved/");
}

approveCreditScoreUser(id:number,form)
{
return this.http.put(this.baseUrl+"form/creditOk/"+id,form);
}

rejectCreditScore(id:number,form)
{
return this.http.put(this.baseUrl+"form/creditReject/"+id,form);
}

verifyDocuments(id:number,form)
{
return this.http.put(this.baseUrl+"form/documentVerified/"+id,form);
}

rejectDocuments(id:number,form)
{
return this.http.put(this.baseUrl+"form/docReject/"+id,form);
}


disburseLoan(id:number,form)
{
return this.http.put(this.baseUrl+"form/loanDisbursed/"+id,form);
}

payInstallent(id:number,form)
{
return this.http.put(this.baseUrl+"form/payInstallemnt/"+id,form);
}

markGood(id:number,form)
{
return this.http.put(this.baseUrl+"form/markGood/"+id,form);
}

markBad(id:number,form)
{
return this.http.put(this.baseUrl+"form/markBad/"+id,form);
}

rejectLoan(id:number,form)
{
return this.http.put(this.baseUrl+"form/loanRejected/"+id,form);
}

getRejectLoanFile()
{
return this.http.get(this.baseUrl+"form/rejected/");
}


getAllApplicant()
{
  return this.http.get(this.baseUrl+"applicant/");
}

getAllApplicantByBranch(id:number)
{
  return this.http.get(this.baseUrl+"applicant/branch/"+id);
}


getAllElectroniItems()
{
  return this.http.get(this.baseUrl+"electronicItem/")
}

getLoanType()
{
  return this.http.get(this.baseUrl+"loanType/")
}

getAllUser()
{
  return this.http.get(this.baseUrl+"user/")
}

saveLoanType(loanType:any)
{
  return this.http.post(this.baseUrl+"loanType/",loanType)
}

saveElectronicItem(electronicItem:any)
{
  return this.http.post(this.baseUrl+"electronicItem/",electronicItem)
}


}

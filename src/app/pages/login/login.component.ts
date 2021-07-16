import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  loginForm:FormGroup;
  
  createLoginForm()
  {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]

    })
  }

onSubmit()
{
console.log(this.loginForm.value);
this.loginUser();

}

reset()
{
  this.loginForm.reset();
  
}

loginUser()
{
  this.userService.loginUser(this.loginForm.value).subscribe(data=>{
    this.userService.user=data;
    console.log(data);
    Swal.fire('Success...', 'You have Login Successfully', 'success')
    this.userService.loginUserInApp(data);

    this.navigate();

  },(error)=>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  })
}

navigate()
{
if(this.userService.user.role=="applicant")
{
  this.router.navigate(['/header/applicant'])
  true;
}

if(this.userService.user.role=="accountHead")
{
  this.router.navigate(['/header/accounts'])
  true;
}

if(this.userService.user.role=="relationshipExecutive")
{
  console.log("relationship guard");
  
  this.router.navigate(['/header/relation'])
  true;
}

if(this.userService.user.role=="operationExecutive")
{
  this.router.navigate(['/header/operation']);
  true;
}

if(this.userService.user.role=="admin")
{
  this.router.navigate(['/header/admin']);
  true;
}

if(this.userService.user.role=="creditManager")
{
  this.router.navigate(['/header/credit-manager']);
  true;
}
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  loanForm:FormGroup;
  
  createLoginForm()
  {
    this.loanForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],

      person:this.fb.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',Validators.required],
        mobile:['',Validators.required],
      }),
     
      aadhar:['',Validators.required],
      pan:['',Validators.required],


    })
  }

onSubmit()
{
console.log(this.loanForm.value);
this.applyLoan();

}

reset()
{
  this.loanForm.reset();
  
}

applyLoan()
{
  this.userService.RegisteUser(this.loanForm.value).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'Loan Applied Succesfully Successfully', 'success')
this.router.navigate(['/login']);

  },(error)=>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  })
}

}

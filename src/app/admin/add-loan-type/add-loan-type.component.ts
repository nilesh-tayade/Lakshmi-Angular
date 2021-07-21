import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-loan-type',
  templateUrl: './add-loan-type.component.html',
  styleUrls: ['./add-loan-type.component.css']
})
export class AddLoanTypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.createLoanTypeForm();
  }

  loanTypeForm:FormGroup;
  
  createLoanTypeForm()
  {
    this.loanTypeForm=this.fb.group({
      loanTitle:['',Validators.required],
      loanDetail:['',Validators.required]

    })
  }

onSubmit()
{
console.log(this.loanTypeForm.value);
this.saveLoanType();

}

reset()
{
  this.loanTypeForm.reset();
  
}

saveLoanType()
{
  this.userService.saveLoanType(this.loanTypeForm.value).subscribe(data=>{
    this.userService.user=data;
    console.log(data);
    Swal.fire('Success...', 'New Loan type is Saved Successfully', 'success');
    this.createLoanTypeForm();

  },(error)=>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  })
}

}

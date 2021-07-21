import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  applicantId:number;
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.applicantId=this.route.snapshot.params.id;
    console.log(this.applicantId);
    
    this.createLoginForm();
    this.getAllLoanTypeItem();
    this.getAllElectronicItem();
    this.loanForm.get('applicant').get('id').setValue(this.applicantId);
    console.log( this.loanForm.get('applicant').get('id').value);
    
  }

  loanForm:FormGroup;
  
  createLoginForm()
  {
    this.loanForm=this.fb.group({
     
      applicant:this.fb.group({
        id:['',Validators.required],
      }),

      electronicItem:this.fb.group({
        id:['',Validators.required],
      }),

      loanType:this.fb.group({
        id:['',Validators.required],
      }),

      bankDetails:this.fb.group({
        bankName:['',Validators.required],

        branchName:['',Validators.required],
        ifcsNo:['',Validators.required],
        accountType:['',Validators.required],
        accountNO:['',Validators.required],
        averageCreditBalance:['',Validators.required],
      }),
     
      incomeStatement:this.fb.group({
        grossSalary:['',Validators.required],
        Netsalary:['',Validators.required],
      
      }),

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
loanTypes:any
getAllLoanTypeItem()
  {
    this.userService.getLoanType().subscribe(data=>{
      this.loanTypes=data;
      console.log(data);
    })
  }

  electronicItems:any;
  getAllElectronicItem()
  {
    this.userService.getAllElectroniItems().subscribe(data=>{
      this.electronicItems=data;
      console.log(data);

    })
  }

applyLoan()
{
  this.userService.applyLoan(this.loanForm.value).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'Loan Applied Succesfully Successfully', 'success')
this.router.navigate(['/header/relation/files']);

  },(error)=>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  })
}

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  constructor(public userService:UserService) { }
re:any
  ngOnInit(): void {
  this.re =this.userService.getLoggedInUser();
  console.log(this.re);
  console.log(this.re.branch.id);
  this.getApplicant();

  }

applicants:any

getApplicant()
  {
    this.userService.getAllApplicantByBranch(this.re.branch.id).subscribe(data=>{
      this.applicants=data
      console.log(data);
      
    })
  }
 

}

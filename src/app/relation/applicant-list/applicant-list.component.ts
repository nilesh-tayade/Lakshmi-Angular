import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  this.getApplicant();
  
  }

applicants:any

getApplicant()
  {
    this.userService.getAllApplicant().subscribe(data=>{
      this.applicants=data
      console.log(data);
      
    })
  }
 

}

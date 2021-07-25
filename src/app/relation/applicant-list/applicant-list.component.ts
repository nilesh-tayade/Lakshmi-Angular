import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

re:any
  ngOnInit(): void {
  this.re =this.userService.getLoggedInUser();
  console.log(this.re);
  console.log(this.re.branch.id);
  this.getApplicant();

  }

applicants:any




displayedColumns: string[] = ['id', 'firstname', 'lastname','email','mobile','aadhar','pancard','action'];
dataSource: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(private userService:UserService) {
 
}

ngAfterViewInit() {

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



getApplicant()
  {
    this.userService.getAllApplicantByBranch(this.re.branch.id).subscribe(data=>{
      this.applicants=data
      console.log(data);
      this.dataSource = new MatTableDataSource(this.applicants);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
 

}

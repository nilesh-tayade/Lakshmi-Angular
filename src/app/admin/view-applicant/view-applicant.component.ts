import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.css']
})
export class ViewApplicantComponent implements OnInit {

  ngOnInit(): void {
    this.getAllAppliant();
  }

  applicants: any
  displayedColumns: string[] = ['id', 'firstname', 'lastname','email','mobile'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userservice:UserService) {
   
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


  getAllAppliant()
  {
    this.userservice.getAllApplicant().subscribe(data=>{
      this.applicants=data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.applicants);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}

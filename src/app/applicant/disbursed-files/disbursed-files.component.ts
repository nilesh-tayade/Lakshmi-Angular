import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-disbursed-files',
  templateUrl: './disbursed-files.component.html',
  styleUrls: ['./disbursed-files.component.css']
})
export class DisbursedFilesComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any
  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser();
    this.getMyFiles();
  }
  files: any;

  users: any
  displayedColumns: string[] = ['id', 'firstname', 'lastname','email','electronicItem','price','civilOk','isDocOk','approved','disbursed','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 

  ngAfterViewInit() {
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getMyFiles() {
    if (this.user.role == 'applicant') {
      this.userService.getApplicationFormsByApplicantDisbursed(this.user.id).subscribe(data => {
        this.files = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.files);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })


    }
  }

}

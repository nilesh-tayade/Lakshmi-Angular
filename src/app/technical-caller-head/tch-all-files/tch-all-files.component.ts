import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tch-all-files',
  templateUrl: './tch-all-files.component.html',
  styleUrls: ['./tch-all-files.component.css']
})
export class TchAllFilesComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getFiles();
  }
  files: any;

  displayedColumns: string[] = ['id', 'firstname', 'lastname','installment','reInstallment','remAmount','markGood','markBad'];
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

getFiles()
  {
    this.userService.getDisbursedForms().subscribe(data=>{
      this.files=data
      console.log(data);
      this.dataSource = new MatTableDataSource(this.files);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
 
  markGood(file: any) {
    this.userService.markGood(file.id, file).subscribe((data: any) => {
      console.log(data);
      this.getFiles();

      Swal.fire('Success...', 'Applicant is Marked As Good', 'success')
    }, (error) => {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }

  markBad(file: any) {
    this.userService.markBad(file.id, file).subscribe((data: any) => {
      console.log(data);
      this.getFiles();

      Swal.fire('Success...', 'Applicant is Marked as Bad Applicant', 'success')
    }, (error) => {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }



}

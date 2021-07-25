import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ops-files',
  templateUrl: './ops-files.component.html',
  styleUrls: ['./ops-files.component.css']
})
export class OpsFilesComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getFiles();

  }

  files: any
  getFiles() {
    this.userService.getApplicationForms().subscribe(data => {
      this.files = data
      console.log(data);
      this.dataSource = new MatTableDataSource(this.files);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

 

  displayedColumns: string[] = ['id', 'firstname', 'lastname','email','electronicItem','price','creditScore','civilOk','getCredit','approveCredit','rejectCredit'];
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


 


  getCreditScore(file: any) {
    this.userService.getCreditScoreUser(file.id, file).subscribe((data: any) => {
      console.log(data);
      this.getFiles();

      Swal.fire('Success...', 'credit Score is ' + data.creditScore, 'success')
    }, (error) => {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }

  approveCreditScore(file: any) {
    this.userService.approveCreditScoreUser(file.id, file).subscribe((data: any) => {
      console.log(data);
      this.getFiles();

      Swal.fire('Success...', 'credit Score is Apprroved ','success')
    }, (error) => {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }

  rejectCreditScore(file: any) {
    this.userService.rejectCreditScore(file.id, file).subscribe((data: any) => {
      console.log(data);
      this.getFiles();

      Swal.fire('Success...', 'credit Score is Rejected Successfully ','success')
    }, (error) => {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }


}

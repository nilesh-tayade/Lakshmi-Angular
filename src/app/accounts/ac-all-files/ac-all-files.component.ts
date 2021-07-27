import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ac-all-files',
  templateUrl: './ac-all-files.component.html',
  styleUrls: ['./ac-all-files.component.css']
})
export class AcAllFilesComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  this.getLoanApprovedFiles();
  
  }

files:any

  

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


getLoanApprovedFiles()
{
  this.userService.getLoanApprovedFiles().subscribe(data=>{
    this.files=data
    console.log(data);
    this.dataSource = new MatTableDataSource(this.files);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
}

disburseLoan(file: any) {
  this.userService.disburseLoan(file.id, file).subscribe((data: any) => {
    console.log(data);
    this.getLoanApprovedFiles();

    Swal.fire('Success...', 'Your Loan is Disbursed','success')
  }, (error) => {
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  });
}

}

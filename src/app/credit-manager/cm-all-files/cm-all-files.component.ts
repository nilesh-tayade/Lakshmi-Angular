import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cm-all-files',
  templateUrl: './cm-all-files.component.html',
  styleUrls: ['./cm-all-files.component.css']
})
export class CmAllFilesComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getFiles();
  }
  files: any;

  displayedColumns: string[] = ['id', 'firstname', 'lastname','electronicItem','price','civilOk','isDocOk','approved','action','reject'];
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
  this.userService.getCreditScoreApprovedUser().subscribe(data=>{
    this.files=data
    console.log(data);
    this.dataSource = new MatTableDataSource(this.files);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
}

verifyDocument(file: any) {
  this.userService.verifyDocuments(file.id, file).subscribe((data: any) => {
    console.log(data);
    this.getFiles();

    Swal.fire('Success...', 'Your Documents Are Verified','success')
  }, (error) => {
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  });
}

rejectDocument(file: any) {
  this.userService.rejectDocuments(file.id, file).subscribe((data: any) => {
    console.log(data);
    this.getFiles();

    Swal.fire('Success...', 'Document are Rejected For User Successfuly','success')
  }, (error) => {
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  });
}

}

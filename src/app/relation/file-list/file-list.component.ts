import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getFiles();
  }
  files: any;

  displayedColumns: string[] = ['id', 'firstname', 'lastname','email','electronicItem','price','civilOk','isDocOk','approved','disbursed'];
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
    this.userService.getApplicationForms().subscribe(data=>{
      this.files=data
      console.log(data);
      this.dataSource = new MatTableDataSource(this.files);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
 



}

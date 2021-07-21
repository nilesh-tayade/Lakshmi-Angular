import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-loan-type',
  templateUrl: './view-loan-type.component.html',
  styleUrls: ['./view-loan-type.component.css']
})
export class ViewLoanTypeComponent implements OnInit {

  ngOnInit(): void {
    this.getAllLoanTypeItem();
  }

  loanTypes: any
  displayedColumns: string[] = ['id', 'loanTitle', 'loanDetail'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userservice:UserService) {
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 

  getAllLoanTypeItem()
  {
    this.userservice.getLoanType().subscribe(data=>{
      this.loanTypes=data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.loanTypes);

    })
  }

}

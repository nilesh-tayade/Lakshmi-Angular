import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-electronic-item',
  templateUrl: './view-electronic-item.component.html',
  styleUrls: ['./view-electronic-item.component.css']
})
export class ViewElectronicItemComponent implements OnInit {


  ngOnInit(): void {
    this.getAllElectronicItem();
  }

  electronicItems: any
  displayedColumns: string[] = ['id', 'company', 'productName', 'serialId', 'price'];
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


  getAllElectronicItem()
  {
    this.userservice.getAllElectroniItems().subscribe(data=>{
      this.electronicItems=data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.electronicItems);

    })
  }
}





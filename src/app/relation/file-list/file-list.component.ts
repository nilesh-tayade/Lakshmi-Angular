import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  this.getFiles();
  
  }

files:any

getFiles()
  {
    this.userService.getApplicationForms().subscribe(data=>{
      this.files=data
      console.log(data);
      
    })
  }
 
send(file:any){

}


}

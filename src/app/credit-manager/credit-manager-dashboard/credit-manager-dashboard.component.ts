import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-credit-manager-dashboard',
  templateUrl: './credit-manager-dashboard.component.html',
  styleUrls: ['./credit-manager-dashboard.component.css']
})
export class CreditManagerDashboardComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  this.getFiles();
  
  }

files:any

getFiles()
{
  this.userService.getCreditScoreApprovedUser().subscribe(data=>{
    this.files=data
    console.log(data);
    
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

}

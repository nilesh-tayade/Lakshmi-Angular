import { Component, OnInit } from '@angular/core';
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

getLoanApprovedFiles()
{
  this.userService.getLoanApprovedFiles().subscribe(data=>{
    this.files=data
    console.log(data);
    
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

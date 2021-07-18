import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-operation-dashboard',
  templateUrl: './operation-dashboard.component.html',
  styleUrls: ['./operation-dashboard.component.css']
})
export class OperationDashboardComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getFiles();

  }

  files: any
  getFiles() {
    this.userService.getApplicationForms().subscribe(data => {
      this.files = data
      console.log(data);

    })
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

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any
  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser();
    this.getMyFiles();
  }
  files: any;

  getMyFiles() {
    if (this.user.role == 'applicant') {
      this.userService.getApplicationFormsByApplicant(this.user.id).subscribe(data => {
        this.files = data;
        console.log(data);

      })


    }
  }
}

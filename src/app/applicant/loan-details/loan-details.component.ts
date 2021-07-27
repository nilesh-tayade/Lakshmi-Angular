import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private userservice :UserService,private route:ActivatedRoute) { }
id :number
form :any;

  ngOnInit(): void {
this.id = this.route.snapshot.params.id;
this.userservice.getApplicationFormById(this.id).subscribe(data=>{
this.form=data;

})
  }

  payInst(file: any) {
    this.userservice.payInstallent(file.id, file).subscribe((data: any) => {
      console.log(data);

      Swal.fire('Success...', 'installment is paid Successfully Apprroved ','success')
    }, (error) => {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }

}

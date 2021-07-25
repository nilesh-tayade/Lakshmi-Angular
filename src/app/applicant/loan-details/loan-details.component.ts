import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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

}

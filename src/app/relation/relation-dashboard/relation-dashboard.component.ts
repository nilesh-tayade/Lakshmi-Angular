import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-relation-dashboard',
  templateUrl: './relation-dashboard.component.html',
  styleUrls: ['./relation-dashboard.component.css']
})
export class RelationDashboardComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  showUser = new User();

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  userShow(): void {
    this.showUser = this.userService.getUser();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  newUser = new User();

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(givenUser:User) {
    this.userService.setUser(givenUser);
    this.router.navigate(['userShow']);

  }

}

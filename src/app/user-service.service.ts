import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user = new User();

  constructor() { }

  setUser(giverUser: User): void {
    this.user = giverUser
  }

  getUser():User {
    return this.user;
  }
}

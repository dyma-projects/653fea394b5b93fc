import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public users$: BehaviorSubject<String[]>= new BehaviorSubject(null);
  constructor() { }

  addUser(user: String) {
    console.log('user reçu=> ', user);
    // Get the current value of users$ (it's an array of strings)
    const currentUsers = this.users$.value || [];

    // Add the new user to the array
    currentUsers.push(user);

    // Update the users$ BehaviorSubject with the new array
    this.users$.next(currentUsers);
    console.log(this.users$);
  }
}

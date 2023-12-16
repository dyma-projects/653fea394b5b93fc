import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];

  constructor(public userservice: UserServiceService) // il faut probablement injecter un service ici !
  {}

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.userservice.users$.subscribe((users: string[]) => {
      this.users = users;
    })
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(public users: UserServiceService
  ) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      // on utilise le service ici pour ajouter l'utilisateur;
      this.users.addUser(username);
      this.el.nativeElement.value = '';
      console.log(this.users);
    }
  }

}

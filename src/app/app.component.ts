import { Component } from '@angular/core';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet5-service';

  constructor(private userServiceService: UserServiceService ){}
}

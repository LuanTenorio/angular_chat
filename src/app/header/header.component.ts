import { Component } from '@angular/core';
import { User, UserService } from '../side-bar/list-users/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openFriend?: User

  constructor(
    public userService: UserService
  ) { }

}

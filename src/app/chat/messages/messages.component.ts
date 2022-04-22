import { Component } from '@angular/core';
import { UserService } from 'src/app/side-bar/list-users/user/user.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  messageSide = true //Math.random() > .5 ? true : false
  messageSidee = false //Math.random() < .5 ? true : false

  constructor(
    public chatService: ChatService,
    public userService: UserService
  ) { }

}

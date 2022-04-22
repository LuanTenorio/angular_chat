import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/side-bar/list-users/user/user.service';
import { ChatService, Message } from '../../chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input('message') message!: Message

  constructor(
    public userService: UserService,
    public chatService: ChatService 
  ) { }


}

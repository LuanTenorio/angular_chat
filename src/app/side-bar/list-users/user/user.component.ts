import { Component, Input } from '@angular/core';
import { ChatService } from 'src/app/chat/chat.service';
import { User } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input('friend') friend?: User

  constructor(public chatService: ChatService) { }

}

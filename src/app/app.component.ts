import { Component } from '@angular/core';
import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  date = new Date().getTime()
  constructor(
    private chatService: ChatService
    ){
    this.chatService.getAllMessegesForUser()
  }

}

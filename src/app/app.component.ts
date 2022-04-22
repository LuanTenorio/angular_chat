import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  date = new Date().getTime()
  constructor(private chatService: ChatService){
    this.chatService.getAllMessegesForUser();
    
  }

  ngOnInit(): void {
    const headerHeight = document.querySelector('app-header')!.getBoundingClientRect().height;
    const contentMessageHeight = document.querySelector('div.content-message')!.getBoundingClientRect().height;
    const bodyHeight = document.querySelector('body')!.getBoundingClientRect().height;
    const searchFriendHeight = document.querySelector('div.search-friend')!.getBoundingClientRect().height;
    console.log(headerHeight)
    document.body.style.setProperty('--chat-height', `${bodyHeight - (contentMessageHeight + headerHeight)}px`);
    document.body.style.setProperty('--list-friends-height', `${bodyHeight - (headerHeight + searchFriendHeight)}px`); 
  }

}

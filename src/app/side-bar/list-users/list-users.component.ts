import { Component } from '@angular/core';
import { ChatService } from 'src/app/chat/chat.service';
import { UserService, User } from './user/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  constructor(
    public userService: UserService, 
    private chatService: ChatService
  ) { }

  updateFriendOpen(friend: User){
    this.userService.setOpenFriend(friend)
    this.chatService.filterMessagerForOpenUser()
  }

}

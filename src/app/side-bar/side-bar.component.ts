import { Component, OnInit } from '@angular/core';
import { UserService } from './list-users/user/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  

  // @ViewChild('searchFriend') searchFriend?: ElementRef
  searchFriend = ""
  filter = this.searchFriend.length >= 1

  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllFriends()
  }

  filterListFriends(){
    this.userService.filterListFriends(this.searchFriend)
  }

}

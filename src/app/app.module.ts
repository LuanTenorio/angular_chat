import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './side-bar/list-users/user/user.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { MessageComponent } from './chat/messages/message/message.component';
import { HeaderComponent } from './header/header.component';
import { ChatService } from './chat/chat.service';
import { UserService } from './side-bar/list-users/user/user.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListUsersComponent } from './side-bar/list-users/list-users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChatComponent,
    MessagesComponent,
    MessageComponent,
    HeaderComponent,
    SideBarComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ChatService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

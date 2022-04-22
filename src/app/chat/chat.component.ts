import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('message') textMessage?: ElementRef

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    document.getElementById('message')?.addEventListener('submit', (e: Event) => {
      e.preventDefault()
        if(this.textMessage!.nativeElement.value.trim() != ''){
          this.chatService.sendMessege(this.textMessage?.nativeElement.value.trim())
          this.textMessage!.nativeElement.value = ''
          this.chatService.filterMessagerForOpenUser()
      }
    })
  }
}

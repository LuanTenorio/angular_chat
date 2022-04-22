import { Injectable } from "@angular/core";
import { UserService } from "src/app/side-bar/list-users/user/user.service";

export type Message = {
    content: string;
    send: number;
    receive: number;
    hour: number;
    visualized?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    curUserAllMessages!: Message[]
    messageWithOpenUser!: Message[]

    messages: Message[] = [
        {
            content: 'oi',
            send: 1,
            receive: 2,
            hour: 1650393843904,
            visualized: true
        },
        {
            content: 'opa',
            send: 2,
            receive: 1,
            hour: 1650393904906,
            visualized: false
        },
        {
            content: 'bom?',
            send: 1,
            receive: 2,
            hour: 1650393843904,
            visualized: true
        },
        {
            content: 'joia',
            send: 2,
            receive: 1,
            hour: 1650393904906,
            visualized: false
        },
        {
            content: 'vc foi hj?',
            send: 1,
            receive: 3,
            hour: 1650393904906,
            visualized: false
        },
        {
            content: 'oi',
            send: 2,
            receive: 3,
            hour: 1650393843904,
            visualized: true
        },
        {
            content: 'hii',
            send: 3,
            receive: 2,
            hour: 1650393904906,
            visualized: false
        }
    ]

    constructor(private userService: UserService) {
        this.getAllMessegesForUser()
        this.filterMessagerForOpenUser()
    }

    sendMessege(text: string) {
        this.messages.push({
            content: text,
            send: this.userService.curUser.id,
            receive: this.userService.openFriend?.id,
            hour: new Date().getTime(),
        })
    }

    viewMessege(message: Message) {
        message.visualized = true
    }

    getAllMessegesForUser() {
        let userMesages = []

        for (let message of this.messages) {
            if (message.send == this.userService.curUser.id || message.receive == this.userService.curUser.id) {
                userMesages.push(message)
            }
        }
        this.curUserAllMessages = userMesages
    }

    filterMessagerForOpenUser() {
        let openUserMessages: Message[] = []
        this.getAllMessegesForUser()
        if (this.curUserAllMessages.length >= 1) {
            for (let message of this.curUserAllMessages) {
                if (message.send == this.userService.openFriend.id || message.receive == this.userService.openFriend.id) {
                    openUserMessages.push(message)
                }
            }
        }
        this.messageWithOpenUser = openUserMessages
    }

    getDateMessage(message: Message): string {
        let date = new Date()
        let timeDifference = date.getTime() - message.hour

        if (date.getDay() == new Date(message.hour).getDay()) {
            if (timeDifference <= (60 * 60 * 5))
                return `${date.getHours()}:${date.getMinutes()}`
            else if (timeDifference <= (60 * 60)) 
                return `Há ${timeDifference} Min`
            else if (timeDifference <= 60) 
                return 'Agora'
        }

        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    }//Corrigir Data

}

import { Injectable } from "@angular/core";
import { Message } from "../../../chat/chat.service";

export type User = {
    id: number;
    name: string;
    logged: boolean;
    online?: boolean;
    open: boolean;
    messeges?: Message[];
    friends?: string
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    curUser: User
    listFriends!: User[]
    filteredListFriends?: User[]
    openFriend!: User

    users: User[] = [
        {
            id: 1,
            name: 'Luan',
            logged: true,
            friends: '-2-3-4',
            open: false
        },
        {
            id: 2,
            name: 'Matheus',
            logged: false,
            friends: '-1',
            open: true
        },
        {
            id: 3,
            name: 'João',
            logged: true,
            friends: '-1-4',
            open: false
        },
        {
            id: 4,
            name: 'Maria',
            logged: false,
            friends: '-1-3',
            open: false
        }
    ]

    constructor() {
        this.curUser = this.users[0]
        this.getAllFriends()
        this.setOpenFriend(this.listFriends![0])
        this.filteredListFriends = this.listFriends!
    }

    //if there is a user, create a list with all his friends, return the list and update "this.listFriends"
    getAllFriends() {
        if (this.curUser.friends != undefined) {
            let listFriends = []
            let idFriends = this.curUser.friends?.split('-')
            for (let user of this.users) {
                if (user.id != this.curUser.id && idFriends.indexOf(String(user.id)) >= 1) {
                    listFriends.push(user)
                }
            }
            this.listFriends = listFriends
            return listFriends
        }
        return null
    }

    //update "the.open Friend" and 'open' it
    setOpenFriend(receiveUser: User) {
        if (this.openFriend != undefined)
            this.openFriend!.open = false

        for (let user of this.getAllFriends()!) {
            if (user.id == receiveUser.id) {
                for (let i = 0; i <= this.users.length; i++) {
                    if (this.users[i].id == user.id) {
                        this.openFriend = this.users[i]
                        this.openFriend.open = true
                        // this.chatService.filterMessagerForOpenUser()
                        break
                    }
                }
                break
            }
        }
    }

    //filter friends based on name, if you don't have any friends return all friends
    filterListFriends(caracter: string): any{
        function removeAcento(text: string) {
            text = text.toLowerCase();
            text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
            text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
            text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
            text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
            text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
            text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
            return text;
        }
        let filteredList = []
        caracter = removeAcento(caracter)
        if (caracter != '') {
            for (let friend of this.getAllFriends()!) {
                if (!removeAcento(friend.name).indexOf(caracter)) 
                    filteredList.push(friend)
            }
            this.filteredListFriends = filteredList.length <= 0 ? this.listFriends! : filteredList
        }
        else 
            this.filteredListFriends = this.listFriends!
    }

}
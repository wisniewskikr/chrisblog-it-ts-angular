import { Message } from "../models/Message";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

    messages: Message[] = [];
    messageId = 1;

    public readAll() {
        return this.messages;
    }

    readById(id: number) {
        const message = this.messages.find((c) => c.id == id);
        return message ?? null;
    }

    create(text: string) {
        const message = JSON.parse(`{"id": ${this.messageId}, "text": "${text}"}`)
        this.messages.push(message);
        this.messageId++;
    }

    update(message: Message) {
        this.messages = this.messages.filter((c) => c.id != message.id);
        this.messages.push(message); 
    }

    delete(id: number) {
        this.messages = this.messages.filter((c) => c.id != id);
    }

}
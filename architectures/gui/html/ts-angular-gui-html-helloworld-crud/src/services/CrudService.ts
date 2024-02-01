import { Message } from "../models/Message";

export class CrudService {

    messages: Message[] = [];
    messageId = 1;

    readAll() {
        return this.messages;
    }

    readById(id: number) {
        return this.messages.find((c) => c.id == id);
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
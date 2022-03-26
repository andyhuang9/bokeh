import message from './message.js'

export default class chat {
    constructor() {
        this.messages = [];
    }
    sendMessage(p1, text) {
        let string = new message(text, p1)
        this.messages.push(string)
    }
}
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: string[] = [];
  messageInput: string = '';

  constructor(private socket: Socket) {
    // Listen for incoming chat messages
    this.socket.on('chat message', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.messageInput) {
      // the chat message to the server
      this.socket.emit('chat message', this.messageInput);
      this.messageInput = '';
    }
  }
}
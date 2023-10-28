import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  onData() {
    return this.socket.fromEvent('data');
  }
}

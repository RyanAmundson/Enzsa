import {Injectable} from "@angular/core";
import {CHATS} from "./mock-chats";
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class CryptoGuruService {
    url = "wss://0-100-pool.burst.cryptoguru.org/ws";


    private subject: Rx.Subject<any>;

    constructor(){
        this.connect(this.url);
    }

    public connect(url): Rx.Subject<any> {
      if (!this.subject) {
        this.subject = this.create(url);
        console.log("Successfully connected: " + url);
      } 
      return this.subject;
    }
  
    private create(url): Rx.Subject<any> {
      let ws = new WebSocket(url);
  
      let observable = Rx.Observable.create(
      (obs: Rx.Observer<any>) => {
          ws.onmessage = obs.next.bind(obs);
          ws.onerror = obs.error.bind(obs);
          ws.onclose = obs.complete.bind(obs);
          return ws.close.bind(ws);
      })
        let observer = {
          next: (data: Object) => {
            console.log(data)
              if (ws.readyState === WebSocket.OPEN) {
                  ws.send(JSON.stringify(data));
              }
          }
      }
      return Rx.Subject.create(observer, observable);
    }
}

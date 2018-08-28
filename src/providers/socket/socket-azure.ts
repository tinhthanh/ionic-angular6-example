import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SocketAzure {
  private subject = new Subject<any>();
   actionSave = new Subject<any>();
   type = {
     create: 'create'
   }
  constructor() {
  }
  sendMessage(message: any, type: string) {
     const m = {type: type , body: message} 
    this.subject.next(m);
  }
  clearMessage() {
    this.subject.next();
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
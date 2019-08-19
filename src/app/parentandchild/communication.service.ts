import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMsgObject {
  toChild : string;
  fromChild : string;
  message : string;
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private messageSource = new BehaviorSubject<IMsgObject>({
    toChild : '',
    fromChild : '',
    message : ''
  })
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  sentMessage(message : IMsgObject){
    this.messageSource.next(message);
  }
}

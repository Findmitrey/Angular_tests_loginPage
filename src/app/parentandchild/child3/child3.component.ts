import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService} from '../communication.service'
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.sass']
})
export class Child3Component implements OnInit {

  private child : string = 'parent';
  private value : string = '';

  @Input() private message : string;
  @Output() private sentMsgToParent  = new EventEmitter();

  constructor(private service : CommunicationService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => {
      if(message.toChild == 'child3'){
        this.child = message.fromChild
        this.message = message.message
      }    
    })
  }

  sendMessageParent(){
    this.sentMsgToParent.emit({
      child : 'child3',
      value : this.value
    });
  }

  sendMessageChild(num : number){
    this.service.sentMessage({
      toChild : `child${num}`,
      fromChild : 'child3',
      message : this.value
    })
  }

  sendAll(){
    this.sendMessageParent();
    this.sendMessageChild(1);
    this.sendMessageChild(2);
  }
}

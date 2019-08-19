import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService} from '../communication.service'
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.sass']
})
export class Child2Component implements OnInit {

  private child : string = 'parent';
  private value : string = '';

  @Input() private message : string;
  @Output() private sentMsgToParent  = new EventEmitter();

  constructor(private service : CommunicationService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => {
      if(message.toChild == 'child2'){
        this.child = message.fromChild
        this.message = message.message
      }    
    })
  }

  sendMessageParent(){
    this.sentMsgToParent.emit({
      child : 'child2',
      value : this.value
    });
  }

  sendMessageChild(num : number){
    this.service.sentMessage({
      toChild : `child${num}`,
      fromChild : 'child2',
      message : this.value
    })
  }

  sendAll(){
    this.sendMessageParent();
    this.sendMessageChild(1);
    this.sendMessageChild(3);
  }
}

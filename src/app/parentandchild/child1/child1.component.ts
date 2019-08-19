import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService} from '../communication.service'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.sass']
})
export class Child1Component implements OnInit {

  public child : string = 'parent';
  public value : string = '';

  @Input() public message : string;
  @Output() private sentMsgToParent  = new EventEmitter();

  constructor(private service : CommunicationService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => {
      if(message.toChild == 'child1'){
        this.child = message.fromChild
        this.message = message.message
      }    
    })
  }

  sendMessageParent(){
    this.sentMsgToParent.emit({
      child : 'child1',
      value : this.value
    });
  }

  sendMessageChild(num : number){
    this.service.sentMessage({
      toChild : `child${num}`,
      fromChild : 'child1',
      message : this.value
    })
  }
  sendAll(){
    this.sendMessageParent();
    this.sendMessageChild(2);
    this.sendMessageChild(3);
  }
}

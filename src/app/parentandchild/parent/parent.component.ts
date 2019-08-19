import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {

  private child :string = '';
  private messageFromChild : string;
  private value : string = '';
  private text = 'Parent say: ';
  private message = {
    child1 : '',
    child2 : '',
    child3 : ''
  };

  constructor() { }

  ngOnInit() {  
  }

  sendMessage(whom : string){
    
    if(whom === 'all'){
      const keys = Object.keys(this.message);

      for(let i = 0 ; i<keys.length; i++)
        this.message[keys[i]] = this.value;
    }
    else this.message[whom] = this.value;
  }

  getMessage({child, value}){
    this.messageFromChild = value;
    this.child = child;
  }

}

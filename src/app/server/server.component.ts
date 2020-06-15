import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  isDisabled = true;

  isHidden = true;

  inputText: string;

  inputText2: string;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      this.isHidden = false;
    }, 3000);
  }

  ngOnInit() {
  }

  sayHi() {
    alert('Hi');
  }

  showEvent(event: Event) {
    console.log(event.target);
  }

  showInputText(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

}

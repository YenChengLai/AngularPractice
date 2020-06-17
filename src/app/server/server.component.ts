import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  inputText: string;

  inputText2: string;

  countHi = 0;

  showHi = false;

  constructor() { }

  ngOnInit() {
  }

  clickCount() {
    this.countHi++;
    this.showHi = true;
  }

  reset() {
    this.showHi = false;
    this.countHi = 0;
  }

  showEvent(event: Event) {
    console.log(event.target);
    this.inputText2 = '';
  }

  showInputText(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  clearInputOne() {
    this.inputText = '';
  }

  getColor4Text1() {
    return this.setColor(this.inputText);
  }

  getColor4Text2() {
    return this.setColor(this.inputText2);
  }

  setColor(input) {
    return !!input ? 'green' : 'red';
  }
}

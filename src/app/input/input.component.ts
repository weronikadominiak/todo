import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <div class="todo-add">
  <input  class="todo-input" [value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElement>
  <button class="btn"
  (click)="changeTitle(inputElement.value);
  inputElement.value=''">
  Save</button>
  </div>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = '';

  constructor() {
  }

  ngOnInit() {}

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
    (<HTMLInputElement>event.target).value = '';
  }
}

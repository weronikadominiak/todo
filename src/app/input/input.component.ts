import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <div>
  <input  class="todo-input" [value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElement>
  <button class="btn" (click)="changeTitle(inputElement.value)">
  Save</button>
  <p>The title is: {{ title }}</p>
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
    this.title = newTitle;
  }
}

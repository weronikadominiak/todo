import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElement>
  <button (click)="changeTitle(inputElement.value)">
  Save</button>
  <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title = '';

  constructor() {
  }

  ngOnInit() {}

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}

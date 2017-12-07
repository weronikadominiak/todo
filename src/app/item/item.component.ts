import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class ="todo-item">
  <input type="checkbox" class="todo-checkbox" (click)="completeItem()"/>
  <p class="todo-title"  [ngClass]="{'todo-complete': isComplete}">{{ todoItem.title }}
   <button class="btn btn-red" (click)="removeItem()">Remove</button>
   </p>
  </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() todoItem;
  isComplete = false;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }

}

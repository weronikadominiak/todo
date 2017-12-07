import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class ="todo-item">
   <p class="todo-title">{{ todoItem.title }}
   <button class="btn btn-red" (click)="removeItem()">Remove</button>
   </p>
  </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() todoItem: string;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

}

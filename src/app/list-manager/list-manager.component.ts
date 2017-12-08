import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>{{title}}</h1>
  <todo-input (submit)="addItem($event)" class="todo-add"></todo-input>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item" (remove)="removeItem($event)" (edit)="editItem($event)" ></todo-item>
    </li>
  </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})

export class ListManagerComponent implements OnInit {
  @Output() itemToChange: EventEmitter<any> = new EventEmitter();
  title = 'todo';
  todoList;

  constructor (
    private todoListService: TodoListService,
  ) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(item) {
    this.todoList = this.todoListService.addItem(item);
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  editItem({item, changes}) {
    this.todoList = this.todoListService.editItem(item, changes);
  }

}

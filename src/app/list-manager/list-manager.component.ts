import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>{{ title | uppercase }}</h1>
  <p *ngIf="!authService.authenticated">
  You must log in to access the todo app!
</p>

<ng-template [ngIf]="authService.authenticated">
  <todo-input (submit)="addItem($event)"></todo-input>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item" (remove)="removeItem($event)" (edit)="editItem($event)" ></todo-item>
    </li>
  </ul>
</ng-template>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})

export class ListManagerComponent implements OnInit {
  title = 'Todo List';
  todoList;

  constructor (
    private todoListService: TodoListService,
    public authService: AuthService,
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

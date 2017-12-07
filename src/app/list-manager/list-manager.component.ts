import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>{{title}}</h1>
  <todo-input (submit)="addItem($event)" class="todo-add"></todo-input>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item"></todo-item>
    </li>
  </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {
  title = 'todo';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}

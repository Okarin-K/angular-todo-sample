import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-client';

  todoList: string[] = [];
  newTodo: string = '';

  public addTodo(): void {
    if(this.newTodo == '') {
      return;
    }

    this.todoList.push(this.newTodo);
    this.newTodo = '';
  }

  public deleteTodo(target: number): void {
    this.todoList.splice(target, 1);
  }
}

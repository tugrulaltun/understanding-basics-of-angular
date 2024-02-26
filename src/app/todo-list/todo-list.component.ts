import {Component, OnInit} from '@angular/core';
import {Todo} from "../models/todo.model";
import {TodoService} from "../services/todo.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos.slice(0, 20);
    });
  }

  addTodo(newTodoTitle: string) {
    const newTodo: Todo = {id: Date.now(), title: newTodoTitle, completed: false};
    this.todoService.addTodo(newTodo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    });
  }

  updateTodo(todo: Todo) {
    todo.completed = !todo.completed; // Toggle completion status
    this.todoService.updateTodo(todo).subscribe((updatedTodo) => {
      const index = this.todos.findIndex(t => t.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    });
  }
}

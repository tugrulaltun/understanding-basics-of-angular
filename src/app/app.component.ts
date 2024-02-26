import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GreetingComponent} from "./greeting/greeting.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {Task} from "./models/task.model";
import {NgForOf} from "@angular/common";
import {TaskComponent} from "./task/task.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {HttpClientModule} from "@angular/common/http";
import {TodoService} from "./services/todo.service";
import {BookListComponent} from "./book-list/book-list.component";
import {CommentComponent} from "./comment/comment.component";
import {DashboardComponent} from "./project-management/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GreetingComponent,
    UserProfileComponent,
    NgForOf,
    TaskComponent,
    RegistrationFormComponent,
    TodoListComponent,
    HttpClientModule,
    BookListComponent,
    CommentComponent,
    DashboardComponent
  ],
  providers: [TodoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'understanding-basics-of-angular';

  tasks: Task[] = [
    {id: 1, title: 'Finish Angular blog post', completed: false},
    {id: 2, title: 'Read Angular documentation', completed: false},
  ];

  onTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = true;
    }
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {Task} from "../models/task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() completed = new EventEmitter<number>();

  markCompleted() {
    if (this.task) {
      this.completed.emit(this.task.id);
    }
  }
}

import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskService } from '../../../services/task.service';
import { Task } from './task.model';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private tasksServices: TaskService) {}

  onCompleteTask() {
    this.tasksServices.removeTask(this.task.id)
  }
}

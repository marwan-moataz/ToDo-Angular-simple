import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  @Input() userId!: string;
  @Input({}) userName?: string;

  isAddingTask = false;

  constructor(private tasksService: TaskService) {}

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}

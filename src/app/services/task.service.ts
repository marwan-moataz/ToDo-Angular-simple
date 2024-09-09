import { Injectable } from '@angular/core';

import { dummyTasks } from '../data/dummy-tasks';
import { NewTaskData } from '../components/user-tasks/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskArray = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('taskArray');

    if (tasks) {
      this.taskArray = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.taskArray.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.taskArray.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.taskArray = this.taskArray.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
  }
}

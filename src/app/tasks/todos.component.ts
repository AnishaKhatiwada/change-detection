import { Component } from '@angular/core';
import { TaskInterface } from '../interface/task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TasksComponent {
  constructor() { }

  tasks: TaskInterface[] = [
    {
      id: '1',
      message: 'First task',
      status: true
    },
    {
      id: '1',
      message: 'Second task',
      status: true
    },
    {
      id: '1',
      message: 'Third task',
      status: false
    }
  ];

  changeMessage(): void {
    //how many times input field is changed and this method is called
    console.log('change');
  }

  //input change
  changeList(): void {
    // this.tasks[0].message = 'First task text input is internally changed'
    this.tasks[0] = { ...this.tasks[0], message: 'First task text input is internally changed' };
    console.log(this.tasks);
  }
}
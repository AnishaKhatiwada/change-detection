import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskInterface } from '../interface/task';
import { TaskService } from '../services/task.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todos-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {

  @Input('task') taskProps: TaskInterface;
  
  filter$: Observable<string>;
  constructor(private taskService: TaskService) {
    this.filter$ = taskService.filter$;
   }

  checkLoad(): boolean{
    console.log('checkLoad');
  return true;
  }

  //event change
  changeMessage(){
    this.taskProps.message = 'Changed from inside'
  }

   //stream change
   changeFilter(): void{
    this.taskService.filter$.next('active');
      }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksMasterComponent } from './tasks-master/tasks-master.component';
import { TaskRowComponent } from './task-row/task-row.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { MsgBoxComponent } from '../shared/msg-box/msg-box.component';

@NgModule({
  declarations: [
    TasksMasterComponent,
    TaskRowComponent,
    TaskFormComponent,
    TaskHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MsgBoxComponent
  ],
  exports:[
    TasksMasterComponent
  ],
  providers:[
    TasksService
  ]
})
export class TasksModule { }

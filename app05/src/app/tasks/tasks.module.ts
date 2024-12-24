import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksMasterComponent } from './tasks-master/tasks-master.component';
import { TaskRowComponent } from './task-row/task-row.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksMasterComponent,
    TaskRowComponent,
    TaskFormComponent,
    TaskHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TasksMasterComponent
  ]
})
export class TasksModule { }

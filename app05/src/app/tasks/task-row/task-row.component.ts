import { Component, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrl: './task-row.component.css'
})
export class TaskRowComponent {

  @Input()
  t!:Task

  @Input()
  delete!:(id:number) => void;

  @Input()
  edit!:(id:number) => void;
}

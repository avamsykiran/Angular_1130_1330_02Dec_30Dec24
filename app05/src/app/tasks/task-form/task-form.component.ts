import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task';
import { state } from '@angular/animations';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  
  @Input()
  save!:(task:Task) => void;

  @Input()
  ownerId!:number;

  @Input()
  t!:Task;

  @Input()
  cancelEdit!:(id:number) => void;

  taskForm: FormGroup;
  isEditing: boolean;

  constructor(private fb: FormBuilder) {
    this.taskForm = fb.group({
      id: [0],
      job: ['', [Validators.required, Validators.minLength(5)]],
      status: ['PENDING', [Validators.required]],
      owner:[this.ownerId]
    });

    this.isEditing = false;
  }

  ngOnChanges(){
    if(this.ownerId){
      this.taskForm.get("owner")?.setValue(this.ownerId);
    }

    if(this.t){
      this.taskForm.reset(this.t);
      this.isEditing=true;
    }
  }

  formSubmitted(){
    this.save(this.taskForm.value);
    if(!this.isEditing){
      this.taskForm.reset({id:0,job:'',status:'PENDING'});
    }
  }

  cancel(){
    if(this.isEditing){
      this.cancelEdit(this.t.id);
    }else{
      this.taskForm.reset({id:0,job:'',status:'PENDING'});
    }
  }
}

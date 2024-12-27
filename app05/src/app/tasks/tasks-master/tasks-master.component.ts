import { Component, inject } from '@angular/core';
import { Contact } from '../../models/contact';
import { Task } from '../models/task';
import { ContactsService } from '../../services/contacts.service';
import { TasksService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-master',
  templateUrl: './tasks-master.component.html',
  styleUrl: './tasks-master.component.css'
})
export class TasksMasterComponent {

  owner!: Contact;
  tasks!: Task[];
  errMsg!: string;

/*  private contactsService: ContactsService = inject(ContactsService);
  private tasksService: TasksService = inject(TasksService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute); */

  constructor(
    private contactsService: ContactsService,
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit() {
    let cid = this.activatedRoute.snapshot.params["cid"];

    if (cid) {

      this.contactsService.getById(Number(cid)).subscribe({
        next: data => this.owner = data,
        error: err => { console.error(err); this.errMsg = "Unable to fetech owner data! Please retry later!" }
      });

      this.tasksService.getAllByOwner(Number(cid)).subscribe({
        next: data => this.tasks = data,
        error: err => { console.error(err); this.errMsg = "Unable to fetech tasks list! Please retry later!" }
      });

    } else {
      this.errMsg = "No owner contact record selected";
    }
  }

  add = (task:Task) => {
    this.tasksService.add(task).subscribe({
      next: task => this.tasks.push(task),
      error: err => { console.error(err); this.errMsg = "Unable to save tasks! Please retry later!" }
    })
  }
  
  update = (task:Task) => {
    this.tasksService.update(task).subscribe({
      next: task => { 
        let index = this.tasks.findIndex(t => t.id===task.id); 
        this.tasks[index]=task;
      },
      error: err => { console.error(err); this.errMsg = "Unable to save tasks! Please retry later!" }
    })
  }
  
  delete = (id:number) => {
    this.tasksService.deleteById(id).subscribe({
      next: () => { 
        let index = this.tasks.findIndex(t => t.id===id); 
        this.tasks.splice(index,1);
      },
      error: err => { console.error(err); this.errMsg = "Unable to save tasks! Please retry later!" }
    })
  }

  edit = (id:number) => {
    let index = this.tasks.findIndex(t => t.id===id);
    if(index>-1){
      this.tasks[index].isEditable=true;
    }
  }

  cancelEdit = (id:number) => {
    let index = this.tasks.findIndex(t => t.id===id);
    if(index>-1){
      this.tasks[index].isEditable=undefined;
    }
  }
}

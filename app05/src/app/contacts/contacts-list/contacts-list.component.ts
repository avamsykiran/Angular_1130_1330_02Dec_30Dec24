import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { RouterLink } from '@angular/router';
import { MsgBoxComponent } from '../../shared/msg-box/msg-box.component';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [ RouterLink,MsgBoxComponent ],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts!:Contact[];
  errMsg!:string;

  constructor(private contactService:ContactsService){
    
  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.contactService.getAll().subscribe({
      next: data => this.contacts=data,
      error: err => { console.error(err); this.errMsg="Unable to load data! Please retry later!";}
    })
  }

  delete(id:number){
    this.contactService.deleteById(id).subscribe({
      next: () => this.loadData(),
      error: err => { console.error(err); this.errMsg="Unable to remove the record! Please retry later!";}
    })
  }
}

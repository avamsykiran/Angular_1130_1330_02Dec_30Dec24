import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts:Contact[];

  constructor(private contactService:ContactsService){
    this.contacts=this.contactService.getAll();
  }
}

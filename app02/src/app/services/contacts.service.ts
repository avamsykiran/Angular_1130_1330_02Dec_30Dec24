import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:Contact[];
  private nextId:number;

  constructor() { 
    this.contacts=[
      {id:1,fullName:"Vamsy",mobile:"9999999999",mailId:"vamsy@gmail.com"},
      {id:2,fullName:"Murthy",mobile:"9999999991",mailId:"murthy@gmail.com"},
      {id:3,fullName:"Suresh",mobile:"9999999992",mailId:"suresh@gmail.com"}
    ];
    this.nextId=4;
  }

  getAll():Contact[] {
    return [...this.contacts];
  }

  getById(id:number) : Contact | undefined{
    return this.contacts.find(c => c.id===id);
  }

  add(c:Contact){
    c.id=++this.nextId;
    this.contacts.push(c);
  }

  update(contact:Contact){
    let index = this.contacts.findIndex(c => c.id===contact.id);

    if(index>-1){
      this.contacts[index]=contact;
    }
  }
  
  deleteById(id:number){
    let index = this.contacts.findIndex(c => c.id===id);

    if(index>-1){
      this.contacts.splice(index,1);
    }
  }
  
}

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient:HttpClient) {     
  }

  getAll():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(environment.apiUrl);
  }
  
  getById(id:number):Observable<Contact>{
    //return this.httpClient.get<Contact>(environment.apiUrl + "/" + id);
    return this.httpClient.get<Contact>(`${environment.apiUrl}/${id}`);
  }
  
  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.apiUrl + "/" + id);
  }
  
  add(contact:Contact):Observable<Contact>{
    return this.httpClient.post<Contact>(environment.apiUrl,contact);
  }
  
  update(contact:Contact):Observable<Contact>{
    return this.httpClient.put<Contact>(environment.apiUrl + "/" + contact.id,contact);
  }
}

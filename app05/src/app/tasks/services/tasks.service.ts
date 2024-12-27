import { Injectable } from '@angular/core';
import { TasksModule } from '../tasks.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  //providedIn: 'root'
  providedIn: 'any'
})
export class TasksService {

  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiHome + "/tasks";
  }

  getAllByOwner(cid:number): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiUrl}?owner=${cid}`);
  }

  getById(id: number): Observable<Task> {    
    return this.httpClient.get<Task>(`${this.apiUrl}/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  add(task:Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task);
  }

  update(task:Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}

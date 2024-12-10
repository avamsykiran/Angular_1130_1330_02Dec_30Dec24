import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InWordsPipe } from '../in-words.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, InWordsPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  str:string;
  num:number;
  dt:Date;

  constructor(){
    this.str="Hello! I am Vamsy. How are you all";
    this.num = 1234.5678;
    this.dt = new Date();
  }
}

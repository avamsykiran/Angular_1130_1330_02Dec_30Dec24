import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msg-box.component.html',
  styleUrl: './msg-box.component.css'
})
export class MsgBoxComponent {

  @Input()
  type!:string;

  msgBoxClasses:string[];

  constructor(){
    this.msgBoxClasses=["col-sm-8","p-4","m-2","alert","alert-info","mx-auto"];
  }

  ngOnChanges(){
    if(this.type && "error"===this.type){
      this.msgBoxClasses=["col-sm-8","p-4","m-2","alert","alert-danger","mx-auto"];
    }
  }
}

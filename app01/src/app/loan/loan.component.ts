import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent {

  loanAmt!:number;
  roi!:number;
  term!:number;

  constructor(){
    this.loadData();
  }

  loadData(){
    this.loanAmt=50000;
    this.roi=18;
    this.term=12;
  }
}

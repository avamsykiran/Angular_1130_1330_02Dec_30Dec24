import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './number-series.component.html',
  styleUrl: './number-series.component.css'
})
export class NumberSeriesComponent {

  lb:number;
  ub:number;

  results!:number[];
  errMsg!:string | null;
  isInProgress!:boolean;

  constructor(private nss:NumberSeriesService){
    this.lb=0;
    this.ub=0;
  }

  formSubmitted(){
    this.results = [];
    this.errMsg = null;
    this.isInProgress = true;

    this.nss.generateSeries(this.lb,this.ub).subscribe({
      next: val => this.results.push(val),
      error: err => { this.errMsg=err; this.isInProgress = false; },
      complete: () => { this.isInProgress = false; }
    });
  }
}

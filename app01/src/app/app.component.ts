import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanComponent } from './loan/loan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ WelcomeComponent, LoanComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;

  constructor(){
    this.title="Angular SPA 1.0";
  }
}

import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanComponent } from './loan/loan.component';
import { TitleFormComponent } from './title-form/title-form.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ WelcomeComponent, LoanComponent, TitleFormComponent, DirectivesDemoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;

  constructor(){
    this.title="Angular SPA 1.0";
  }

  updateTitle = (title:string) => {
    this.title=title;
  }
}

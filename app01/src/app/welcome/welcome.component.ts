import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  userName:string;

  logos:string[];

  logoIndex:number;

  constructor(){
    this.userName="Somebody";
    
    this.logos=[
      "assets/images/w1.jpeg",
      "assets/images/w2.jpeg",
      "assets/images/w3.png"
    ];

    this.logoIndex=0;
  }

  changeLogo(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }

}
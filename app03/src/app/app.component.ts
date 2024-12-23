import { Component } from '@angular/core';
import { NumberSeriesComponent } from './number-series/number-series.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NumberSeriesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app03';
}

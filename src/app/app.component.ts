import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'counter-angular';
  numberOne: number = 1;

  constructor(counterService: CounterService) {
    counterService;
  }
}

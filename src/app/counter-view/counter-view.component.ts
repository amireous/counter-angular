import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss'],
})
export class CounterViewComponent implements OnInit {
  calculatedNumber: number | undefined;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.subjectNumber.subscribe((data) => {
      this.calculatedNumber = data;
    });
  }
}

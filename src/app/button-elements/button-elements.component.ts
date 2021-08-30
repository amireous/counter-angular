import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-button-elements',
  templateUrl: './button-elements.component.html',
  styleUrls: ['./button-elements.component.scss'],
})
export class ButtonElementsComponent implements OnInit {
  @Input() btnValue: number | undefined;

  constructor(private conuterService: CounterService) {}

  ngOnInit(): void {}

  increaseNumber() {
    this.conuterService.increaseNum = this.btnValue;
  }
}

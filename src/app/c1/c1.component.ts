import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component implements OnInit {
  constructor(private conuterService: CounterService) {}

  ngOnInit(): void {}

  increaseNumber() {
    this.conuterService.increaseNum = 1;
  }
}

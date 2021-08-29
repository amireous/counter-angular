import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component implements OnInit {
  constructor(private conuterService: CounterService) {}

  ngOnInit(): void {}

  increaseNumber() {
    this.conuterService.increaseNum = 2;
  }
}

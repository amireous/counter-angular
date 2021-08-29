import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss'],
})
export class C3Component implements OnInit {
  constructor(private conuterService: CounterService) {}

  ngOnInit(): void {}
  increaseNumber() {
    this.conuterService.increaseNum = 3;
  }
}

import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.scss'],
})
export class C4Component implements OnInit {
  constructor(private conuterService: CounterService) {}

  ngOnInit(): void {}
  increaseNumber() {
    this.conuterService.increaseNum = 4;
  }
}

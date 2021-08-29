import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  countDownNumber: number = 1000;

  increaseNum: number | undefined;
  subjectNumber: Subject<number> = new Subject();

  constructor() {
    setInterval(() => {
      if (this.increaseNum) {
        this.countDownNumber += this.increaseNum + 1;
        this.increaseNum = undefined;
      }
      this.countDownNumber--;

      this.subjectNumber.next(this.countDownNumber);
    }, 1000);
  }
}

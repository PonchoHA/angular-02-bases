import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy() {
    this.counter ++;
  }
  decreaseBy() {
    this.counter --;
  }
  reset() {
    this.counter = 10;
  }
}

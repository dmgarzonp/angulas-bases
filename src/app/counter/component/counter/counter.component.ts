import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Couter: {{ counter }}</h3>
      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="resetCouter()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent {


  public counter: number = 10


  increaseBy( value: number): void{
    this.counter += value;
  }

  resetCouter(){
    this.counter = 10;
  }
}

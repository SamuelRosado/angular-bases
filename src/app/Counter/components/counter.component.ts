import { Component } from '@angular/core';

@Component({

  selector: 'app-counter',
  template: `

<p>{{counter}}</p>

<button (click)="increaseBy(+1)"> +1</button>
<button (click)="increaseBy(-1)"> -1 </button>
<button (click)="resetBy()"> Reset </button>

  `

})

export class CounterComponent  {


  public counter: number = 100;



 public increaseBy(value: number): void{

    this.counter += value;
 }

 public resetBy(){

    this.counter = 100;
 }


}



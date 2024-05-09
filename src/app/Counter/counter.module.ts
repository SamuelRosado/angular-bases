import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';







@NgModule({

  declarations:[

    CounterComponent
  ],
  exports:[

    CounterComponent
  ],
  imports:[

    CommonModule,
    FormsModule
  ]


})
export class CounterModule{}



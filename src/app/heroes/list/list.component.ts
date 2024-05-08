import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Spiderman','Thor','Flash','Hulk', 'Balman']
  public deletedhero?:string


  public removeLastHero(): void {

    this.deletedhero = this.heroName.pop();

  }
}

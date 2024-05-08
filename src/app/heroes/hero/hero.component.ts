import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent {

  public name: string = 'Batman'
  public age: number = 40



  get capitalizedName(): string{

    return this.name.toUpperCase();
  }

  getheroDescription(): string{

    return `${this.name} - ${this.age}`

  }

  changeHero():void{

    this.name = 'Robin'

  }
  changeAge():void{

      this.age = 30
  }

  Reset(): void {

    this.name = 'Batman'
    this.age = 40

  }
}

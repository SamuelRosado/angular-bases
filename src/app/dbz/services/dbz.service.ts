import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})


export class DbzService {

  public characters: Character[] = [{

    id: uuid(),
    name: 'Krilin',
    power: 600
  },{
    id: uuid(),
    name: 'goku',
    power: 1000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 2000
  }

]

  onNewCharacter( character: Character): void{

    const  newCharacter: Character= {id: uuid(), ...character};

    this.characters.push(newCharacter)
  }

  OnDeleteCharacterById (id: string){

    this.characters = this.characters.filter( character => character.id !== id )
  }

}

import { Component, EventEmitter, Input, Output  } from "@angular/core";
import { Character } from "../../interfaces/character.interface";
import { v4 as uuid } from 'uuid';


@Component({

  selector: 'dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent{

 @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterlist: Character[] = [{

    // id: uuid(),
    name: '',
    power: 0
  }]

//OnDelete = index value: number


  OnDeleteCharacter(id:string): void{

    this.OnDelete.emit(id)
    console.log(id)

  }

}

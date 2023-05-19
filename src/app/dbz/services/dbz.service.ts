import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public character: Character[] = [
    {
      id: uuid(),
      name: 'killin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 29000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 5000
    }
  ];

  addCharacter( character: Character): void{

    const newCharacter: Character = { id: uuid(), ...character }

    this.character.push(newCharacter);
  }

  //onDeletCharacter(index: number){
  //  this.character.splice(index, 1);

  onDeletCharacterById(id?: string){
    this.character = this.character.filter( character => character.id !== id)

  }
}



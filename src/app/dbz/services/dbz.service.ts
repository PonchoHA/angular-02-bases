import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {id: uuid(), name: 'Krilin',power: 500},
    {id: uuid(), name:'Goku', power: 90000}
  ];

  oneNewCharacter(character: Character) {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };
    this.characters.push(newCharacter);
  }
  onDeleteCharacterByid(id:string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}

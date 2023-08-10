import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService:DbzService) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter (id:string) {
    this.dbzService.onDeleteCharacterByid(id);
  }
  onAddCharacter (character:Character) {
    this.dbzService.oneNewCharacter(character);
  }
}

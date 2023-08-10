import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Spiderman';
  public age:number = 45;
  public changedName = false;
  public changedAge = false;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = 'Batman';
    this.changedName = true;
  }
  changeAge() {
    this.age = 30;
    this.changedAge = true;
  }
  resetValues() {
    this.age = 45;
    this.name = 'Spiderman';
    this.changedAge = false;
    this.changedName = false;
  }
}

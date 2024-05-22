import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age:number = 45;

  get capitalizaName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${this.age}`;
  }
  changeHero():void {
    this.name = "Pedro";
  }

  changeAge():void {
    this.age = 22;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}

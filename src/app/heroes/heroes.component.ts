import { Component } from '@angular/core';

import { HEROES } from '../mocks/heroes';

import { Hero } from './interfaces';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

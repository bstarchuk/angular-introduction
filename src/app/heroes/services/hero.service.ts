import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from 'src/app/mocks/heroes';
import { MessageService } from 'src/app/messages/services/message.service';

import { Hero } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}

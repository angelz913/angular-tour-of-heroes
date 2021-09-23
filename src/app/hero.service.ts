import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    // service in service
    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        const heroes = of(Heroes);
        this.messageService.add('HeroService: fetched heroes');
        return heroes;
    }
    
}

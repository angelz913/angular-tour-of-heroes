import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

// a decorator function that specifies the metadata for the component
@Component({
    selector: 'app-heroes', // CSS element selector
    templateUrl: './heroes.component.html', // template file
    styleUrls: ['./heroes.component.css']    // private CSS styles
})
export class HeroesComponent implements OnInit {

    selectedHero?: Hero;    // optional value, undefined at first

    heroes: Hero[] = [];

    // defines a private heroService property and identifies it as a HeroService injection site
    constructor(private heroService: HeroService) { }
    
    // a lifecycle hook
    ngOnInit(): void {
        this.getHeroes();
    }
    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

}

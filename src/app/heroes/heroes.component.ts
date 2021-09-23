import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { Heroes } from '../mock-heroes'

// a decorator function that specifies the metadata for the component
@Component({
    selector: 'app-heroes', // CSS element selector
    templateUrl: './heroes.component.html', // template file
    styleUrls: ['./heroes.component.css']    // private CSS styles
})
export class HeroesComponent implements OnInit {

    selectedHero?: Hero;    // optional value, undefined at first

    heroes: Hero[] = Heroes;

    constructor() { }
    
    // a lifecycle hook
    ngOnInit(): void {
    }
    
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}

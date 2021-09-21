import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

// a decorator function that specifies the metadata for the component
@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // template file
  styleUrls: ['./heroes.component.css']  // private CSS styles
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }
  
  // a lifecycle hook
  ngOnInit(): void {
  }

}

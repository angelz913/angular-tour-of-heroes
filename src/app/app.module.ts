import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// @NgModule decorator annotates the top-level AppModule class
@NgModule({
  // contains a list of declared modules that the application uses
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  // contains a list of external modules that the application needs
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

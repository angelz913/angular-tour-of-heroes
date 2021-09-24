import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
    // path: a string that matches the URL in the browser address bar
    // component: the component created when navigating to this route
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    // redirects a URL that fully matches the empty path to '/dashboard'
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    // the colon in the path indicates that :id is a placeholder
    { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
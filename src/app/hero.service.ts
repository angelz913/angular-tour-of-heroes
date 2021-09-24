import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api

    // service in service
    constructor(
        private httpClient: HttpClient,
        private messageService: MessageService
    ) { }

    getHero(id: number): Observable<Hero> {
        // ! means you're certain that the object is not undefined
        const hero = Heroes.find(x => x.id === id)!; 
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
    }

    getHeroes(): Observable<Hero[]> {
        // const heroes = of(Heroes);
        // this.messageService.add('HeroService: fetched heroes');
        // return heroes;
        return this.httpClient.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(_ => this.log('fetched heroes')),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }
    
    // Log a HeroService message with the MessageService
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}
    

}
